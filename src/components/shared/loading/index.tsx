export function LoadingMain(){
    return (
        <div className="min-h-[60svh] flex items-center justify-center bg-gray-50">
            <div className="text-center">
                {/* Spinner */}
                <div className="relative mx-auto mb-4 flex-center">
                    <div className="absolute animate-spin rounded-full h-16 w-16 border-4 border-gray-200"></div>
                    <div className="absolute animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
                </div>

                {/* Loading Message */}
                <div className={'mt-10'}>
                    <p className="text-gray-800 font-medium text-lg">در حال بارگذاری...</p>
                </div>
            </div>
        </div>
    )
}