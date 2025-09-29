// import axiosInstance from '@/lib/axios';
// import {
//     LoginFormType,
//     LoginResponseType,
//     LoginErrorResponse,
// } from '@/types/auth';
// import { AxiosResponse } from 'axios';
// import axios from 'axios';
// /**
//  * Log in an existing user.
//  */
// export async function loginApi(
//     payload: LoginFormType
// ): Promise<AxiosResponse<LoginResponseType> | LoginErrorResponse> {
//     try {
//         return await axiosInstance.post<LoginResponseType>(
//             '/api/auth/login',
//             payload
//         );
//     } catch (error: unknown) {
//         if (axios.isAxiosError(error) && error.response?.status === 422) {
//             return error.response.data as LoginErrorResponse;
//         }else if (axios.isAxiosError(error) && error.response?.status === 401) {
//             return error.response.data as LoginErrorResponse;
//         }
//         return Promise.reject(error);
//     }
// }