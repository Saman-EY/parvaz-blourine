'use server'

import axiosInstance from "@/lib/axios";
import {WebBlogListResponse, WeblogSingleType, WeblogType} from "@/types/weblog";

type Params = {
    page: number;
    tag?: number;
    category?: number
};

export async function getWeblogList({
                                        page,
                                        tag,
                                        category,
                                    }: Params): Promise<WebBlogListResponse | undefined> {
    try {
        const params: Record<string, any> = {
            LanguageId: 1,
            PageSize: 9,
            PageNumber: page,
            PopularTagsCount: 10,
            ...(typeof category === 'number' ? {CategoriesId: category} : {}),
            ...(typeof tag === 'number' ? {TagsId: tag} : {}),
        };

        const response = await axiosInstance.get<WebBlogListResponse>(
            '/api/ShirdalBlog/GetBlogsList',
            {params}
        );

        if (response.data?.items) return response.data;
    } catch (error) {
        console.error("Error getting data from weblogs list", error);
        throw error;
    }
}

export async function getWeblogTops(): Promise<WeblogType[] | undefined> {
    try {
        const response = await axiosInstance.get<WeblogType[]>('/api/ShirdalBlog/GetTopBlogs', {
            params: {
                LanguageId: 1,
                topcount: 10
            }
        });
        return response.data
    } catch (error) {
        console.error("Error getting data from weblogs list", error);
        throw error;
    }
}

export async function getWeblogSingle({slug}: { slug: string }): Promise<WeblogSingleType | undefined> {
    try {
        const response = await axiosInstance.get<WeblogSingleType>('/api/ShirdalBlog/GetBlogById', {
            params: {
                LanguageId: 1,
                slug: slug
            }
        });
        return response.data
    } catch (error) {
        console.error("Error getting data from weblogs list", error);
        throw error;
    }
}