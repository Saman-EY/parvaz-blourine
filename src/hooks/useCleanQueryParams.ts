'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * هوک سفارشی برای پاک‌سازی پارامترهای کوئری URL
 * @param keepKeys آرایه‌ای از کلیدهای پارامترهایی که باید حفظ شوند
 * @returns تابعی برای به‌روزرسانی URL با پارامترهای مشخص‌شده
 */
export function useCleanQueryParams(keepKeys: string[] = []) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    /**
     * به‌روزرسانی URL با حفظ پارامترهای مشخص‌شده
     * @param replace اگر true باشد، از router.replace استفاده می‌شود؛ در غیر این صورت، از router.push
     */
    const updateUrl = (replace: boolean = false) => {
        const currentParams = new URLSearchParams(searchParams.toString());

        // حذف پارامترهایی که در keepKeys نیستند
        Array.from(currentParams.keys()).forEach((key) => {
            if (!keepKeys.includes(key)) {
                currentParams.delete(key);
            }
        });

        const newQuery = currentParams.toString();
        const newUrl = newQuery ? `${pathname}?${newQuery}` : pathname;

        if (replace) {
            router.replace(newUrl);
        } else {
            router.push(newUrl);
        }
    };

    return updateUrl;
}
