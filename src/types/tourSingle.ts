// Root Tour interface

// HotelGroup (empty array in your sample)

export interface IHotel {
  id: number;
  image: Record<string, any>; // Or a more specific type if you know the structure of the image
  name: string;
  name_fa: string | null;
  slug: string;
  stars: number;
  rate: number;
}

export interface IHotelPrice {
  name: string;
  name_fa: string;
  code: string; // e.g. "DBL", "SGL", ...
  price: number; // the numeric price
}

export interface IHotelGroup {
  hotels: IHotel[];
  prices: IHotelPrice[];
}

export interface ITour {
  id: number;
  name: string;
  slug: string;
  status: string;
  description: string;
  image: IImage;
  countries: ICountry[];
  locales: ILocale[];
  courses: ICourse[];
}

// Course object
export interface ICourse {
  id: number;
  slug: string;
  code: string;
  status: string;
  cities: ICity[];
  services: IService[];
  supplies: ISupply[];
  origin_transport_data: ITransportData;
  destination_transport_data: ITransportData;
  important_things: string; // comes as a stringified JSON ([[...]])
  capacity: number;
  itinerary: IItinerary[];
  from_date: string;
  to_date: string;
  base_price: number;
  extra_price: string | number;
  meta_keywords: string;
  meta_description: string;
  tour: Partial<ITour>; // or {} if always empty
  hotel_groups: IHotelGroup[];
}

// Image object
export interface IImage {
  alt: string;
  path: string;
}

// Country object
export interface ICountry {
  id: number;
  name: string;
  name_fa: string;
  code: string;
  created_at: string | null;
  updated_at: string | null;
  pivot: ICountryPivot;
}

export interface ICountryPivot {
  countriable_type: string;
  countriable_id: number;
  country_id: number;
}

// Locale (empty in your sample but included for completeness)
export interface ILocale {
  [key: string]: any;
}

// City object
export interface ICity {
  id: number;
  name: string;
  name_fa: string;
  country_id: number;
  created_at: string;
  updated_at: string;
  pivot: ICityPivot;
}

export interface ICityPivot {
  tour_course_id: number;
  city_id: number;
}

// Service object
export interface IService {
  id: number;
  name: string;
  preview: IPreview;
  created_at: string | null;
  updated_at: string | null;
}

export interface IPreview {
  svg: string;
  path: string;
}

// Supply (empty array in your sample, placeholder for future)
export interface ISupply {
  id: number;
  name: string;
  preview: {
    svg: string;
    path: string;
  };
}

export interface ITransportData {
  type: string;
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

export interface IItinerary {
  subject: string;
  title: string;
  content: string;
  image: Image2;
}

interface Image2 {
  id: number;
  title: string;
  alt: string;
  width: string;
  height: string;
  path: string;
  created_at: string;
  updated_at: string;
}
