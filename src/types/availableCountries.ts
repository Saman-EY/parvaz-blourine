export interface AvailableCountriesType {
    code: string;
    created_at: Date | null;
    id: number;
    name: string;
    name_fa: string;
    updated_at: string;
    pivot: {
        countriable_id: number;
        countriable_type: string;
        country_id: number;
    };
}
