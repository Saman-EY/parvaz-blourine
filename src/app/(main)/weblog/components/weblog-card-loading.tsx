import {Skeleton} from "@/components/ui/skeleton";

export function WeblogCardLoading() {
    return (
        <div className="max-w-[342px] w-full flex flex-col gap-2">
            <div className="w-full lg:max-w-[490px] aspect-[490/340] rounded-15 overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </div>

            {/* Avatar + Name + Date + Likes */}
            <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full"/>
                <div className="flex flex-col gap-1">
                    <Skeleton className="w-24 h-3 rounded-md"/>
                    <Skeleton className="w-16 h-3 rounded-md"/>
                </div>
                <div className="ml-auto">
                    <Skeleton className="w-5 h-5 rounded-md"/>
                </div>
            </div>

            <Skeleton className="w-3/4 h-4 rounded-md"/>
            <Skeleton className="w-full h-3 rounded-md"/>
        </div>
    );
};