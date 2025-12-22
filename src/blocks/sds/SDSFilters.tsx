import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

export const SDSFilters: React.FC = () => {
    return (
        <div className="card flex flex-wrap gap-6 items-center">
            <div className="flex-1 min-w-[300px] flex items-center gap-3 bg-muted px-4 py-2 rounded-lg border border-transparent focus-within:border-accent transition-all">
                <Search size={18} className="text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search by name, CID, or CAS..."
                    className="bg-transparent border-none outline-none w-full text-sm text-foreground"
                />
            </div>
            <div className="flex gap-3">
                <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-accent">
                    <option value="">Status: All</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="expired">Expired</option>
                </select>
                <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-accent">
                    <option value="">Manufacturer: All</option>
                    <option value="chemcorp">ChemCorp Industrial</option>
                    <option value="globalacids">Global Acids Ltd</option>
                </select>
                <button className="btn btn-outline gap-2">
                    <Filter size={16} /> Filters
                </button>
            </div>
            <div className="ml-auto">
                <button className="btn btn-outline gap-2">
                    <Download size={16} /> Export
                </button>
            </div>
        </div>
    );
};
