import React from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';


export interface UserFiltersProps {
    onAddUserClick: () => void;
}

export const UserFilters: React.FC<UserFiltersProps> = ({ onAddUserClick }) => {
    return (
        <div className="card flex flex-wrap gap-6 items-center">
            <div className="flex-1 min-w-[300px] flex items-center gap-3 bg-muted px-4 py-2 rounded-lg border border-transparent focus-within:border-accent transition-all">
                <Search size={18} className="text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search users by name, email or role..."
                    className="bg-transparent border-none outline-none w-full text-sm text-foreground"
                />
            </div>
            <div className="flex gap-3">
                <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-accent">
                    <option value="">Role: All</option>
                    <option value="admin">Admin</option>
                    <option value="safety-officer">Safety Officer</option>
                    <option value="reviewer">Reviewer</option>
                    <option value="viewer">Viewer</option>
                </select>
                <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-accent">
                    <option value="">Status: All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button className="btn btn-outline gap-2">
                    <Filter size={16} /> Filters
                </button>
            </div>
            <div className="ml-auto flex gap-3">
                <button className="btn btn-outline gap-2">
                    <Download size={16} /> Export
                </button>
                <button className="btn btn-primary gap-2" onClick={onAddUserClick}>
                    <Plus size={16} /> Add User
                </button>
            </div>
        </div>
    );
};
