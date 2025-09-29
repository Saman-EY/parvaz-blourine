import axiosInstance from "@/lib/axios";
import axios from "axios";
import {redirect} from "next/navigation";

export async function getMenuItems(): Promise<any> {
    // try {
    //     const response = await axiosInstance.get<{ data: any }>('/api/merchants', {});
    //
    //     const locations = response.data.data;
    //     if (!locations || locations.length === 0) {
    //         throw new Error('No locations found');
    //     }
    //     return locations;
    //
    // } catch (error: unknown) {
    //     if (axios.isAxiosError(error)) {
    //         if (error.response?.status === 401) {
    //             // Unauthorized -> redirect
    //             redirect('/login');
    //         }
    //         // Other HTTP error
    //         throw new Error(error.response?.data?.message || `Request failed with status ${error.response?.status}`);
    //     }
    //     // Non-Axios error
    //     throw error;
    // }

    return (
        [
            {
                name: 'آسیا',
                countries: [
                    'چین', 'هند', 'ژاپن', 'اندونزی', 'ایران', 'ترکیه', 'عربستان',
                    'کره‌جنوبی', 'تایلند', 'پاکستان', 'ویتنام', 'فیلیپین', 'مالزی',
                    'سنگاپور', 'عراق', 'افغانستان', 'ازبکستان', 'بنگلادش', 'قزاقستان', 'سوریه',
                ],
            },
            {
                name: 'اروپا',
                countries: [
                    'آلمان', 'فرانسه', 'انگلستان', 'ایتالیا', 'اسپانیا', 'هلند', 'سوئد',
                    'نروژ', 'دانمارک', 'سوئیس', 'اتریش', 'بلژیک', 'یونان', 'لهستان',
                    'پرتغال', 'اوکراین', 'چک', 'مجارستان', 'فنلاند', 'ایرلند',
                ],
            },
            {
                name: 'آفریقا',
                countries: [
                    'نیجریه', 'مصر', 'آفریقای جنوبی', 'کنیا', 'مراکش', 'الجزایر', 'اتیوپی',
                    'غنا', 'تانزانیا', 'اوگاندا', 'آنگولا', 'سودان', 'کامرون', 'سنگال',
                    'ساحل عاج', 'رواندا', 'تونس', 'زامبیا', 'موزامبیک', 'لیبی',
                ],
            },
            {
                name: 'آمریکا',
                countries: ['کانادا', 'کالیفرنیا', 'تگزاس', 'فلوریدا', 'نیویورک', 'پنسیلوانیا',
                    'ایلینوی', 'اوهایو', 'جورجیا', 'کارولینای شمالی', 'میشیگان',
                    'نیوجرسی', 'ویرجینیا', 'واشنگتن', 'آریزونا', 'ماساچوست',
                    'تنسی', 'ایندیانا', 'میزوری', 'مریلند', 'ویسکانسین',],
            },
            {
                name: 'استرالیا',
                countries: [
                    'نیو ساوت ولز', 'ویکتوریا', 'کوئینزلند', 'استرالیای غربی',
                    'استرالیای جنوبی', 'قلمرو پایتختی', 'قلمرو شمالی', 'تاسمانی',
                ],
            },
        ]
    )
}
