import { log } from '@/lib/logger';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "صفحه یافت نشد - 404 | پرواز بلورین شیردال",
    description: "صفحه مورد نظر یافت نشد. لطفاً از منوی اصلی سایت استفاده کنید یا به صفحه اصلی بازگردید.",
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "صفحه یافت نشد - 404 | پرواز بلورین شیردال",
        description: "صفحه مورد نظر یافت نشد. لطفاً از منوی اصلی سایت استفاده کنید یا به صفحه اصلی بازگردید.",
        type: "website",
        url: "https://parvaz-shirdal.com/404",
        images: [
            {
                url: "/og-404.jpg",
                width: 1200,
                height: 630,
                alt: "صفحه یافت نشد - 404"
            }
        ],
        locale: "fa_IR"
    },
    twitter: {
        card: "summary",
        title: "صفحه یافت نشد - 404 | پرواز بلورین شیردال",
        description: "صفحه مورد نظر یافت نشد. لطفاً از منوی اصلی سایت استفاده کنید یا به صفحه اصلی بازگردید.",
        images: ["/twitter-404.jpg"]
    }
};

export default function NotFound() {
  // Log 404 errors at info level
  log.info('404 Not Found page accessed', {
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    context: 'NotFoundPage'
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          صفحه مورد نظر یافت نشد
        </h2>
        
        <p className="text-gray-600 mb-6">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="inline-block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            بازگشت به صفحه اصلی
          </Link>
          
          <Link
            href="/tours"
            className="inline-block w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
          >
            مشاهده تورها
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>اگر فکر می‌کنید این یک خطا است، لطفاً با پشتیبانی تماس بگیرید.</p>
        </div>
      </div>
    </div>
  );
}
