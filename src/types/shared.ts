export interface ImageType {
    id: number;
    title: string;
    alt: string;
    width: string;
    height: string;
    path: string;
    created_at: string | null;
    updated_at: string | null;
}

export interface CountryType {
    id: number;
    name: string;
    name_fa: string;
    code: string;
    created_at: string | null;
    updated_at: string | null;
}