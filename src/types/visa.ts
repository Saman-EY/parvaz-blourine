import {CountryType, ImageType} from "@/types/shared";

export interface VisaType {
    id: number;
    name: string;
    slug: string;
    image: ImageType;
    issue_duration: number;
    issuer: string;
    type: string;
    status: string;
    check_lists: {
        id: number;
        name: string;
    }[];
    country: CountryType
    created_at: string | null;
    updated_at: string | null;
}

export interface VisaDetailType {
    id: number;
    name: string;
    description: string;
    addresses: AddressType;
    check_lists: any | null;
    image: ImageType;
    issue_duration: number;
    issuer: string;
    type: string;
    status: string;
    country: CountryType;
    created_at: string | null;
    updated_at: string | null;
}

export interface AddressType {
    number: string;
    address: string | null;
}