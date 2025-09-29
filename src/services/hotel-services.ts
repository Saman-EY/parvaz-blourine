import {log} from "@/lib";
import axiosInstance from "@/lib/axios";
import {ApiResponseType, PaginationDataType} from "@/types/index.js";
import {HotelDetailType,  IHotel} from "@/types/hotel";
import {AxiosError} from "axios";
import {notFound} from "next/navigation";

const GET_HOTELS_LIST = '/api/v1/hotels'
const GET_HOTELS_SINGLE = '/api/v1/hotels/'
type ListParamsType = {
    page?: number,
}

export class HotelService {
    static async getList({page = 1}: ListParamsType) :Promise<ApiResponseType<PaginationDataType<IHotel>>>{
        try {
            log.info('Getting Hotel Service List', {
                page: page,
                url: GET_HOTELS_LIST,
                full_url: `${axiosInstance.getUri() + GET_HOTELS_SINGLE}`,
                context: 'HotelService'
            });
            let params: Record<string, any> = {
                page: page,
            }
            const response = await axiosInstance.get(GET_HOTELS_LIST, {params})
            if (response.status === 200) {
                log.info('Tours list fetched successfully', {
                    page,
                    status: response.status,
                    message: response.data.message,
                    totalTours: response.data.data?.total || 0,
                    currentPage: response.data.data?.current_page || 0,
                    context: 'HotelService'
                });
                return response.data;
            }
            log.warn('No Hotels data found', {page, params, context: 'HotelService'});
            return response.data;
        } catch (error) {
            log.error("Error fetching hotels list", {
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
                page: page,
                context: 'HotelService'
            });
            if ((error as AxiosError)?.response?.status === 404) {
                notFound();
            }
            throw error;
        }
    }
    static async getSingle({slug}: { slug: string }): Promise<ApiResponseType<HotelDetailType>> {
        try {
            log.info('Fetching single tour urls', {
                slug: slug,
                api_url: GET_HOTELS_LIST,
                main_url: axiosInstance.getUri(),
            })
            const response = await axiosInstance.get<Promise<ApiResponseType<HotelDetailType>>>(`${GET_HOTELS_SINGLE}${slug}`);

            if (response.data) {
                log.info('Single hotel fetched successfully', {
                    slug,
                    tourTitle: response.data,
                    context: 'HotelService'
                });
                return response.data;
            }

            log.warn('No hotel data found', {slug, context: 'HotelService'});
            return response.data;
        } catch (error) {
            log.error("Error fetching single tour", {
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