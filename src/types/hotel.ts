import { ImageType } from '@/types/shared';

export interface CheckboxOption<T extends string | number = string> {
  value: T;
  label: string;
  checked: boolean;
}

export interface CheckboxOptionCustom {
  value: string;
  label: string;
  checked: boolean;
  children?: CheckboxOptionCustom[];
}

export interface PriceFilterType {
  min: number;
  max: number;
  step: number;
  selected: [number, number];
}

export interface HotelsFiltersType {
  price: PriceFilterType;
  continents: CheckboxOptionCustom[];
  starRating: CheckboxOption<5 | 4 | 3 | 2 | 1>[];
  hotelRating: CheckboxOption<'luxury' | 'boutique' | 'economy' | 'family' | 'business'>[];
  hotelClasses: CheckboxOption<'spa' | 'gym' | 'pool' | 'pet_friendly' | 'parking' | 'breakfast' | 'wifi'>[];
  locations: CheckboxOption<'city_center' | 'nearby' | 'beach_front' | 'mountain' | 'airport'>[];
}

export interface HotelDetailType {
  id: number;
  name: string;
  name_fa: string | null;
  description: string | null;
  lat: number;
  lon: number;
  location: string;
  location_fa: string | null;
  stars: number;
  rate: number;
  facilities: HotelFacility[];
  images: ImageType[];
  created_at: string;
  updated_at: string;
  country: {
    code: string;
    name_fa: string;
  };
  meals: string;
  code: string;
}

export type HotelFacility = {
  id: number;
  name: string;
  preview: {
    svg: string;
    path: string;
  };
  created_at: string | null;
  updated_at: string | null;
};

export interface IHotel {
  id: number;
  code: string | null;
  name: string;
  name_fa: string | null;
  country: ICountry;
  meals: string | null; // e.g. "ALL", "BB", "HB"
  slug: string;
  description: string | null;
  stars: number;
  rate: number;
  image: IHotelImage | null;
  created_at: string; // ISO datetime
  updated_at: string; // ISO datetime
}

export interface ICountry {
  id: number;
  name: string;
  name_fa: string | null;
  code: string; // ISO country code (e.g. "TR")
  created_at: string | null;
  updated_at: string | null;
}

export interface IHotelImage {
  id: number;
  title: string;
  alt: string;
  width: string; // or number if always numeric
  height: string; // same here
  path: string; // image path or URL
  created_at: string; // ISO datetime
  updated_at: string; // ISO datetime
  pivot: IHotelImagePivot;
}

export interface IHotelImagePivot {
  hotel_id: number;
  feature_image_id: number;
}
