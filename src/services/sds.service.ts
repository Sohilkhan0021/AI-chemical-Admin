import type { SDSListResponse, SDSFilterParams } from './sds.types';

const MOCK_SDS: SDSListResponse = {
    items: [
        { id: '1', productId: 'SDS-9921', productName: 'Acetone Technical Grade', casNumber: '67-64-1', version: 'v2.4', manufacturer: 'ChemCorp Industrial', status: 'Approved', lastReviewedAt: '2024-12-10', createdAt: '2024-01-01', updatedAt: '2024-12-10' },
        { id: '2', productId: 'SDS-1042', productName: 'Sulfuric Acid 98%', casNumber: '7664-93-9', version: 'v4.1', manufacturer: 'Global Acids Ltd', status: 'Pending', lastReviewedAt: '2024-12-18', createdAt: '2024-02-15', updatedAt: '2024-12-18' },
    ],
    total: 1284
};

export const sdsService = {
    fetchSDSList: async (_params: SDSFilterParams): Promise<SDSListResponse> => {
        // Mock API call
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_SDS), 500);
        });
    },

    getSDSById: async (id: string) => {
        return MOCK_SDS.items.find(item => item.id === id);
    }
};
