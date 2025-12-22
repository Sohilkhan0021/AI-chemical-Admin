export type Status = 'Pending' | 'Approved' | 'Rejected' | 'Expired' | 'Active' | 'Inactive' | 'Draft';

export interface BaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface User extends BaseEntity {
    name: string;
    email: string;
    role: 'Admin' | 'Safety Officer' | 'Reviewer' | 'Viewer';
    status: 'Active' | 'Inactive';
    organizationId: string;
}

export interface Organization extends BaseEntity {
    name: string;
    complianceLevel: 'Standard' | 'Premium' | 'Enterprise';
    status: 'Active' | 'Inactive';
}

export interface SDS extends BaseEntity {
    productId: string;
    productName: string;
    casNumber: string;
    version: string;
    manufacturer: string;
    status: Status;
    lastReviewedAt: string;
}
