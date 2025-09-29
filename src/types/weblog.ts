export interface BlogTagType {
    id: number;
    name: string;
    slug: string;
}

export interface WeblogCategoryType {
    id: number;
    name: string;
    slug: string;
}

export interface PaginationType {
    totalRecords: number;
    currentPage: number;
    totalPages: number;
    nextPage: number | null;
    prevPage: number | null;
}

export interface WebBlogListResponse {
    items: WeblogType[];
    blogTagsList: BlogTagType[];
    categories: WeblogCategoryType[];
    pagination: PaginationType;
}


export interface WeblogAuthor {
    name: string;
    profilePicture: string;
}


export interface WeblogType {
    id: number;
    title: string;
    headerText: string;
    picturePath: string;
    likes: number;
    tags?: BlogTagType[];
    categories?: WeblogCategoryType[];
    registrationDate: string; // ISO 8601 date string
    createdBy: string;
    createdByProfilePicture: string;
    slug: string;
}

export interface WeblogSingleType extends WeblogType {
    mainText: string
    blogCategories: WeblogCategoryType[]
    blogTags: BlogTagType[]
    metaTitle: string
    metaDescription: string
    metaKeywords: string
}