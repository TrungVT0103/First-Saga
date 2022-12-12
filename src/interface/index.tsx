export interface PaginationParams {
    _limit: number;
    _page: number;
    _total: number;
}

export interface city {
    code: string;
    name: string;
}

export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

// ### trong file student.js cung cap voi city.ts

export interface Student {
    id?: number;
    name: number;
    age: number;
    mark: number;
    gender: 'male' | 'female';
    city: string;
}

export interface ListParams {
    _page: number;
    _limit: number;
    _sort: string;
    _order: 'asc' | 'desc';
    [key: string]: any
}