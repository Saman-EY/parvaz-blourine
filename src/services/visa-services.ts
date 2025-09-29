import {ApiResponseType, PaginationDataType} from "@/types/index.js";
import axiosInstance from "@/lib/axios";
import {log} from "@/lib/logger";
import {VisaDetailType, VisaType} from "@/types/visa";
import {notFound} from "next/navigation";
import {AxiosError} from "axios";

const GET_VISA_LIST = '/api/v1/visas'
const GET_VISA_SINGLE = '/api/v1/visas/'

type ListParamsType = {
    page: number;
};

export class VisaService {
    static async getList({
                             page,
                         }: ListParamsType): Promise<ApiResponseType<PaginationDataType<VisaType>>> {

        try {
            log.info('Fetching Visa list: ', {
                page,
                context: 'VisaService'
            });
            let params: Record<string, any> = {
                page: page,
            }
            // if (minDay) params.minDay = minDay;
            // if (maxDay) params.maxDay = maxDay;
            // if (minPrice) params.minPrice = minPrice;
            // if (maxPrice) params.maxPrice = maxPrice;
            const response = await axiosInstance.get(GET_VISA_LIST, {params})
            if (response.status === 200) {
                log.info('Visa list fetched successfully', {
                    page,
                    status: response.status,
                    message: response.data.message,
                    totalTours: response.data.data?.total || 0,
                    currentPage: response.data.data?.current_page || 0,
                    context: 'VisaService'
                });
                return response.data;
            }
            log.warn('No Visa data found', {page, params, context: 'VisaService'});
            return response.data;
        } catch (error) {

            log.error("Error fetching tours list", {
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
                page,
                context: 'VisaService'
            });
            if ((error as AxiosError)?.response?.status === 404) {
                notFound();
            }
            throw error;
        }
    }

    static async getSingle({slug}: { slug: string }): Promise<ApiResponseType<VisaDetailType>> {
        try {
            log.info('Fetching single Visa urls', {
                slug: slug,
                api_url: GET_VISA_SINGLE,
                main_url: axiosInstance.getUri(),
                context: 'VisaService'
            })
            const response = await axiosInstance.get(`${GET_VISA_SINGLE}${slug}`);

            if (response.data) {
                log.info('Single Visa fetched successfully', {
                    slug,
                    tourTitle: response.data,
                    context: 'ToursService'
                });
                return response.data;
            }

            log.warn('No Visa data found', {slug, context: 'VisaService'});
            return response.data;
        } catch (error) {
            log.error("Error fetching single Visa", {
                error: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
                slug,
                context: 'VisaService'
            });
            if ((error as AxiosError)?.response?.status === 404) {
                notFound();
            }
            throw error;
        }
    }
}