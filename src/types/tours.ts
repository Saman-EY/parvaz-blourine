import { CountryType, ImageType } from '@/types/shared';

export interface TourType {
  id: number;
  name: string;
  slug: string;
  status: string;
  description: string;
  countries: CountryType[];
  visas: any | null;
  base_price: number | null;
  extra_price: number | null;
  start_date: string | null;
  image: ImageType | null;
}

// -----------------------------------------------------------
export interface TourDetailType {
  id: number;
  name: string;
  slug: string;
  status: string;
  description: string;
  countries: CountryType[];
  image: ImageType;
  locales: any[];
  services: ServiceType[];
  courses: CourseType[];
  created_at: string;
  updated_at: string;
}

export interface ServiceType {
  id: number;
  name: string;
  name_fa: string | null;
  svg_icon_path: string;
  created_at: string | null;
  updated_at: string | null;
  pivot: ServicePivot;
}

export interface CourseType {
  id: number;
  tour_id: number;
  slug: string;
  code: string;
  status: string;
  origin_transport_data: TransportDataType;
  destination_transport_data: TransportDataType;
  important_things: string;
  capacity: number;
  from_date: string;
  to_date: string;
  base_price: number;
  extra_price: number;
  meta_keywords: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
  cities: CityType[];
  services: ServiceType[];
  hotels: HotelWrapper[];
}

export interface TransportDataType {
  type: string; // e.g. "Airplane"

  origin: {
    id: number;
    iata: string;
    name: string;
    name_fa: string | null;
    lat: number;
    lon: number;
    tz: string;
    country_id: number;
    created_at: string | null;
    updated_at: string | null;
  };

  airline: {
    id: number;
    iata: string;
    name: string;
    name_fa: string | null;
    icon_path: string;
    large_icon_path: string;
    created_at: string | null;
    updated_at: string | null;
  };

  destination: {
    id: number;
    iata: string;
    name: string;
    name_fa: string | null;
    lat: number;
    lon: number;
    tz: string;
    country_id: number;
    created_at: string | null;
    updated_at: string | null;
  };

  departure_time: string | null;
  arrival_time: string | null;
}

export interface CityType {
  id: number;
  name: string;
  name_fa: string;
  country_id: number;
  created_at: string;
  updated_at: string;
  pivot: CityPivotType;
}

export interface CityPivotType {
  tour_course_id: number;
  city_id: number;
}

export interface ServiceType {
  id: number;
  name: string;
  name_fa: string | null;
  svg_icon_path: string;
  created_at: string | null;
  updated_at: string | null;
  pivot: ServicePivot;
}

export interface ServicePivot {
  tour_course_id: number;
  service_id: number;
}

export interface HotelWrapper {
  name: HotelType;
  rooms: RoomType[];
}

export interface HotelType {
  id: number;
  image: HotelImageType | null;
  name: string;
  name_fa: string | null;
  slug: string;
  stars: number;
  rate: number;
}

export interface HotelImageType {
  id: number;
  title: string;
  alt: string;
  width: string;
  height: string;
  path: string;
  created_at: string;
  updated_at: string;
  pivot: HotelImagePivotType;
}

export interface HotelImagePivotType {
  hotel_id: number;
  feature_image_id: number;
}

export interface RoomType {
  name: string;
  name_fa: string;
  code: string;
  price: number;
}
