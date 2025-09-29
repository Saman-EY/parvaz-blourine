// import axios, {AxiosError, AxiosResponse} from 'axios';
//
// interface ContactFormData {
//     name: string;
//     email: string;
//     message: string;
// }
//
// interface ContactResponse {
//     success: boolean;
//     data?: AxiosResponse;
//     error?: AxiosError;
// }
//
// /**
//  * Sends a contact form submission to the server.
//  *
//  * @param body - The contact form data containing name, email, and message.
//  * @returns An object indicating success or failure with response data or error.
//  */
// export async function PostContactUs(body: ContactFormData): Promise<ContactResponse> {
//     try {
//         const response = await axios.post('/api/about-contact', body);
//         return {
//             success: true,
//             data: response,
//         };
//     } catch (error) {
//         return {
//             success: false,
//             error: error as AxiosError,
//         };
//     }
// }
