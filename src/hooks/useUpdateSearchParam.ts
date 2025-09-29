"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";

type UpdateSearchParamOptions = {
    name: string;
    value: string | string[];
    mode?: "single" | "multi";
};

export function useUpdateSearchParam() {
    const router = useRouter();
    const searchParams = useSearchParams();

    return useCallback(
        ({name, value, mode = "single"}: UpdateSearchParamOptions) => {
            const params = new URLSearchParams(searchParams.toString());

            if (mode === "single") {
                params.set(name, typeof value === "string" ? value : value[0]);
            } else if (mode === "multi") {
                const existingValues = params.getAll(name);
                const newValues = Array.isArray(value) ? value : [value];

                const uniqueValues = [...new Set([...existingValues, ...newValues])];

                params.delete(name);
                uniqueValues.forEach(v => params.append(name, v));
            }

            router.push(`?${params.toString()}`);
        },
        [router, searchParams]
    );
}
