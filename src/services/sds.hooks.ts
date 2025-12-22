import { useQuery } from '@tanstack/react-query';
import { sdsService } from './sds.service';
import type { SDSFilterParams } from './sds.types';

export const useSDSList = (params: SDSFilterParams) => {
    return useQuery({
        queryKey: ['sds-list', params],
        queryFn: () => sdsService.fetchSDSList(params),
    });
};

export const useSDSDetail = (id: string) => {
    return useQuery({
        queryKey: ['sds-detail', id],
        queryFn: () => sdsService.getSDSById(id),
        enabled: !!id,
    });
};
