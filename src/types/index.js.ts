export interface SelectionOption {
  value: string;
  label: string;
}

export interface ServiceField {
  id: number;
  value: string;
  label: string;
  options: SelectionOption[];
}

export interface TravelServiceCategory {
  id: number;
  title: string;
  icon: string;
  fields?: ServiceField[];
}

export type TravelServiceList = TravelServiceCategory[];

export interface PaginationDataType<T> {
  current_page: number;
  data: Array<T>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLinkType[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
export interface PaginationLinkType {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
  errors: any[];
  execution: string;
  version: string | null;
}

export interface HomeHeroSliderType {
    src: string;
    alt: string;
}

export interface TravelsPlanType {
    id: string;
    src: string;
    heading: string;
    description: string;
    headingLink: string;
    heading2: string;
    description2: string;
}