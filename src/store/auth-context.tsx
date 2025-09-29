'use client'
import React, {createContext, useContext, useEffect, useState} from 'react';
import useSWR from 'swr';
import axios from "@/lib/axios";
import {LoginType, RegisterType, ResponseTypeAuth, UserType} from "@/types/auth";
import {AxiosResponse} from "axios";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";


type AuthContextType = {
    user: UserType | null;
    isLoading: boolean;
    postLoading: boolean;
    errors: Record<string, string>
    status: 'loading' | 'guest' | 'authenticated' | 'failed'
    login: (props: LoginType) => void;
    register: (props: RegisterType) => void;
    logout: () => void;
    mutate: () => void;
    middleware: (middleware: 'guest' | 'auth') => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    postLoading: false,
    errors: {},
    status: 'loading',
    login: async () => {
    },
    register: async () => {
    },
    logout: async () => {
    },
    mutate: () => {
    },
    middleware: () => {
    },
});

const fetcher = (url: string) => axios.get(url, {
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
}).then((res: AxiosResponse<UserType>) => res.data);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const {data, error, isLoading, mutate} = useSWR<UserType>('api/auth/me', fetcher);
    const [token, setToken] = useState<string | null>(null)
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'loading' | 'guest' | 'authenticated' | 'failed'>(('loading'))
    const [postLoading, setPostLoading] = useState(false)
    const router = useRouter();

    function storeToken(accessToken: string) {
        removeToken()
        Cookies.set('token', accessToken, {expires: 7});
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setToken(accessToken)
    }

    function removeToken() {
        Cookies.remove('token');
        delete axios.defaults.headers.common['Authorization'];
        setToken(null);
    }

    useEffect(() => {
        const tokenStored = Cookies.get('token');
        if (tokenStored) {
            storeToken(tokenStored)
            setStatus('authenticated')
        } else {
            removeToken()
            setStatus('guest')
        }
    }, []);

    function middleware(middleware: 'guest' | 'auth') {
        if (middleware === "auth") {
            if (!data && !token && !isLoading) {
                setStatus('guest')
                removeToken()
                window.location.href = '/login';
            }
        } else if (middleware === "guest") {
            if (data && token && !isLoading) {
                setStatus('authenticated')
                storeToken(token)
                window.location.href = '/dashboard';
            }
        }
    }

    async function register(props: RegisterType) {
        try {
            setStatus('loading');
            setErrors({});
            setPostLoading(true)
            const response = await axios.post<ResponseTypeAuth>('/api/auth/register', props);
            // Store received access token
            storeToken(response.data.access_token);
            setToken(response.data.access_token)
            await mutate();
            router.push('/dashboard');
        } catch (e: any) {
            if (e.response?.status === 422) {
                setErrors(e.response.data || {});
            } else {
                throw e;
            }
            setStatus('failed');
        } finally {
            setPostLoading(false)
        }
    }

    async function login(props: LoginType) {
        try {
            setStatus('loading')
            setPostLoading(true)
            setErrors({})
            const response = await axios.post<ResponseTypeAuth>('/api/auth/login', props);
            // Store received access token
            storeToken(response.data.access_token);
            setToken(response.data.access_token)
            await mutate();
            setStatus('authenticated')
            router.push('/dashboard');
        } catch (e: any) {
            if (e.response?.status === 422) {
                setErrors(e.response?.data || {});
            } else if (e.response?.status === 401) {
                setErrors({
                    email: 'The provided credentials are incorrect.',
                });
            } else {
                throw e;
            }
            setStatus('failed');
            setPostLoading(true)
        } finally {
            setPostLoading(false)
        }
    }

    async function logout() {
        try {
            setStatus('loading')
            setPostLoading(true)
            const response = await axios.post('/api/auth/logout');
            removeToken()
            await mutate();
            setStatus('guest')
            router.push('/login');
        } catch (e: any) {
            throw e;
        } finally {
            setPostLoading(false)
            setStatus('guest')
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user: data ?? null,
                login,
                logout,
                register,
                isLoading: status === 'loading',
                errors,
                mutate,
                middleware,
                status,
                postLoading
            }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
