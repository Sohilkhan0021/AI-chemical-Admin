import React from 'react';
import { SDSTable } from '../blocks/sds/SDSTable';
import { SDSFilters } from '../blocks/sds/SDSFilters';

export const SDSRegistryContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold  mb-2">SDS Registry</h1>
                    <p className="text-muted-foreground text-base">Centralized Safety Data Sheet management and search.</p>
                </div>
                <div>
                    <button className="btn btn-primary">Add New SDS</button>
                </div>
            </div>

            <SDSFilters />
            <SDSTable />
        </div>
    );
};
