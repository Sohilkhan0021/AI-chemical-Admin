import type { SDS } from '../types/common';

export interface SDSFilterParams {
    query?: string;
    status?: string;
    manufacturer?: string;
    page: number;
    pageSize: number;
}

export interface SDSListResponse {
    items: SDS[];
    total: number;
}
