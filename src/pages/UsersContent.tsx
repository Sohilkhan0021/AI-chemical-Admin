import React from 'react';
import { UserTable } from '../blocks/users/UserTable';
import { UserFilters } from '../blocks/users/UserFilters';

export const UsersContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold  mb-2">User & Roles</h1>
                    <p className="text-muted-foreground text-base">Manage system permissions and account access.</p>
                </div>
                <div>
                    <button className="btn btn-primary">Add New User</button>
                </div>
            </div>

            <UserFilters />
            <UserTable />
        </div>
    );
};
