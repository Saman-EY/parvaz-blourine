import axiosInstance from "@/lib/axios";

/**
 * Log out the current user.
 */
export async function logoutApi(): Promise<void> {
    await axiosInstance.post('/api/auth/logout');
}