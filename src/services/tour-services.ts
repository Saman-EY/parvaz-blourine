import { ApiResponseType, PaginationDataType } from '@/types/index.js';
import { TourDetailType, TourType } from '@/types/tours';
import axiosInstance from '@/lib/axios';
import { log } from '@/lib/logger';
import { AxiosError } from 'axios';
import { notFound } from 'next/navigation';

const GET_TOURS_LIST = '/api/v1/tours';
const GET_TOURS_SINGLE = '/api/v1/tours/';

type ListParamsType = {
  page: number;
  minPrice?: number;
  maxPrice?: number;
  minDay?: number;
  maxDay?: number;
};

export class TourService {
  static async getList({
    page,
    minDay,
    maxDay,
    minPrice,
    maxPrice,
  }: ListParamsType): Promise<ApiResponseType<PaginationDataType<TourType>>> {
    try {
      log.info('Fetching tours list', {
        page,
        minDay,
        maxDay,
        minPrice,
        maxPrice,
        context: 'ToursService',
      });
      let params: Record<string, any> = {
        page: page,
      };
      // if (minDay) params.minDay = minDay;
      // if (maxDay) params.maxDay = maxDay;
      // if (minPrice) params.minPrice = minPrice;
      // if (maxPrice) params.maxPrice = maxPrice;
      const response = await axiosInstance.get(GET_TOURS_LIST, { params });
      if (response.status === 200) {
        log.info('Tours list fetched successfully', {
          page,
          status: response.status,
          message: response.data.message,
          totalTours: response.data.data?.total || 0,
          currentPage: response.data.data?.current_page || 0,
          context: 'ToursService',
        });
        return response.data;
      }
      log.warn('No tours data found', { page, params, context: 'ToursService' });
      return response.data;
    } catch (error) {
      log.error('Error fetching tours list', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        page,
        minDay,
        maxDay,
        minPrice,
        maxPrice,
        context: 'ToursService',
      });
      if ((error as AxiosError)?.response?.status === 404) {
        notFound();
      }
      throw error;
    }
  }

  static async getSingle({ slug }: { slug: string }): Promise<ApiResponseType<TourDetailType>> {
    try {
      log.info('Fetching single tour urls', {
        slug: slug,
        api_url: GET_TOURS_SINGLE,
        main_url: axiosInstance.getUri(),
      });
      const response = await axiosInstance.get(`${GET_TOURS_SINGLE}${slug}`);

      if (response.data) {
        log.info('Single tour fetched successfully', {
          slug,
          tourTitle: response.data,
          context: 'ToursService',
        });
        return response.data;
      }

      log.warn('No tour data found', { slug, context: 'ToursService' });
      return response.data;
    } catch (error) {
      log.error('Error fetching single tour', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        slug,
      });
      if ((error as AxiosError)?.response?.status === 404) {
        notFound();
      }
      throw error;
    }
  }
}
