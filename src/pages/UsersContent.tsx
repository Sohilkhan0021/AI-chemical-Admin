import React, { useState } from 'react';
import { UserTable } from '../blocks/users/UserTable';
import { UserFilters } from '../blocks/users/UserFilters';
import { AddUserForm } from '../forms/AddUserForm';

export const UsersContent: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold  mb-2">User & Roles</h1>
                    <p className="text-muted-foreground text-base">Manage system permissions and account access.</p>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Add New User
                    </button>
                </div>
            </div>

            <UserFilters onAddUserClick={() => setIsAddModalOpen(true)} />
            <UserTable />

            <AddUserForm
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />
        </div>
    );
};
