import React, { useState, useEffect, useRef } from 'react';
import {
    Search,
    Filter,
    Plus,
    Download,
    MoreHorizontal,
    ArrowUpDown,
    MapPin,
    Eye,
    FileDown
} from 'lucide-react';
import { Badge } from '../components/Badge';
import { OrganizationDetailModal } from '../components/OrganizationDetailModal';
import { AddOrganizationForm } from '../forms/AddOrganizationForm';

// Mock data for Organizations
const mockOrganizations = [
    {
        id: 'ORG-001',
        name: 'Global Chemicals Inc.',
        logo: 'GC',
        regId: 'REG-102938',
        status: 'Active',
        region: 'Global',
        createdDate: '2025-01-15',
        totalSds: 1240,
        pendingReview: 12,
        expiredSds: 5,
        projects: 8,
        locations: 14,
        assignedUsers: 45
    },
    {
        id: 'ORG-002',
        name: 'Eco-Friendly Solutions Ltd.',
        logo: 'ES',
        regId: 'REG-554433',
        status: 'Active',
        region: 'Europe',
        createdDate: '2025-03-22',
        totalSds: 450,
        pendingReview: 3,
        expiredSds: 0,
        projects: 3,
        locations: 5,
        assignedUsers: 12
    },
    {
        id: 'ORG-003',
        name: 'Industrial Acid Corp.',
        logo: 'IA',
        regId: 'REG-998877',
        status: 'Inactive',
        region: 'Europe',
        createdDate: '2024-11-05',
        totalSds: 890,
        pendingReview: 0,
        expiredSds: 22,
        projects: 5,
        locations: 12,
        assignedUsers: 28
    },
];

export const OrganizationsContent: React.FC = () => {
    const [selectedOrg, setSelectedOrg] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddOrgModalOpen, setIsAddOrgModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOpenDetails = (org: any) => {
        setSelectedOrg(org);
        setIsModalOpen(true);
        setActiveDropdown(null);
    };

    const toggleDropdown = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
            {/* Page Header */}
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black  tracking-tight">Organization Management</h1>
                    <p className="text-muted-foreground text-sm">Manage organizations, projects, locations, and SDS ownership across the enterprise.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-outline gap-2 bg-white shadow-sm hover:bg-muted transition-all">
                        <Download size={18} /> Export
                    </button>
                    <button
                        className="btn btn-primary gap-2 shadow-lg shadow-accent/20 active:scale-95 transition-all"
                        onClick={() => setIsAddOrgModalOpen(true)}
                    >
                        <Plus size={18} /> Add Organization
                    </button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="card flex flex-wrap gap-4 items-center shadow-sm">
                <div className="flex-1 min-w-[300px] flex items-center gap-3 bg-muted/50 px-4 py-2.5 rounded-2xl border border-transparent focus-within:border-accent/30 focus-within:bg-white transition-all">
                    <Search size={18} className="text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by organization name or registration ID..."
                        className="bg-transparent border-none outline-none w-full text-sm text-foreground"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <select className="bg-white border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent transition-all cursor-pointer shadow-sm">
                        <option value="">Status: All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <select className="bg-white border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent transition-all cursor-pointer shadow-sm">
                        <option value="">Region: Global</option>
                        <option value="Europe">Europe</option>
                        <option value="Global">Global</option>
                    </select>
                    <button className="p-2.5 bg-white border border-border rounded-xl hover:bg-muted transition-all shadow-sm flex items-center gap-2 text-sm font-medium">
                        <ArrowUpDown size={18} className="text-muted-foreground" />
                        Sort by: Name
                    </button>
                    <button className="p-2.5 bg-white border border-border rounded-xl hover:bg-muted transition-all shadow-sm">
                        <Filter size={18} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Organizations Table */}
            <div className="card !p-0 overflow-hidden shadow-xl border border-border/40 bg-white/70 backdrop-blur-sm">
                <table className="admin-table">
                    <thead>
                        <tr className="bg-muted/30">
                            <th className="py-5 font-bold text-foreground">Organization Name</th>
                            <th className="py-5 font-bold text-foreground">Registration ID</th>
                            <th className="py-5 font-bold text-foreground">Status</th>
                            <th className="py-5 font-bold text-foreground">Assets</th>
                            <th className="py-5 font-bold text-foreground text-right w-24">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                        {mockOrganizations.map((org) => (
                            <tr
                                key={org.id}
                                className="hover:bg-accent/5 transition-all group"
                            >
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-black text-sm border border-accent/20 transition-all shadow-sm">
                                            {org.logo}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-foreground text-[15px]">{org.name}</span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <MapPin size={10} /> {org.region}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <code className="text-[11px] font-mono bg-muted/50 px-2 py-1 rounded-md text-foreground/70 font-bold uppercase whitespace-nowrap">
                                        {org.regId}
                                    </code>
                                </td>
                                <td className="py-4 px-6">
                                    <Badge variant={org.status === 'Active' ? 'success' : 'secondary'}>
                                        {org.status}
                                    </Badge>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col text-center">
                                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">SDS</span>
                                            <span className="text-sm font-bold text-foreground">{org.totalSds}</span>
                                        </div>
                                        <div className="flex flex-col text-center border-l border-border/20 pl-4">
                                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">Projs</span>
                                            <span className="text-sm font-bold text-foreground">{org.projects}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-right relative">
                                    <button
                                        onClick={(e) => toggleDropdown(e, org.id)}
                                        className={`p-2 border border-border rounded-xl hover:bg-accent hover:text-white transition-all text-muted-foreground shadow-sm ${activeDropdown === org.id ? 'bg-accent text-white border-accent' : ''}`}
                                    >
                                        <MoreHorizontal size={18} />
                                    </button>

                                    {activeDropdown === org.id && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute right-6 top-16 w-48 bg-white rounded-2xl shadow-2xl border border-border/50 p-2 z-[200] animate-in slide-in-from-top-2 duration-200"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                onClick={() => handleOpenDetails(org)}
                                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-foreground hover:bg-accent/10 hover:text-accent rounded-xl transition-all"
                                            >
                                                <Eye size={16} /> View Details
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-foreground hover:bg-accent/10 hover:text-accent rounded-xl transition-all"
                                            >
                                                <FileDown size={16} /> Export
                                            </button>

                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-4 flex justify-between items-center bg-muted/20 border-t border-border/30">
                    <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest">{mockOrganizations.length} Total Organizations</span>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold border border-border rounded-xl bg-white text-muted-foreground opacity-50 cursor-not-allowed" disabled>Previous</button>
                        <button className="px-4 py-2 text-xs font-bold border border-accent/20 rounded-xl bg-accent/10 text-accent ring-2 ring-accent/10">1</button>
                        <button className="px-4 py-2 text-xs font-bold border border-border rounded-xl bg-white text-foreground hover:bg-muted transition-all shadow-sm">Next</button>
                    </div>
                </div>
            </div>

            {selectedOrg && (
                <OrganizationDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    org={selectedOrg}
                />
            )}

            <AddOrganizationForm
                isOpen={isAddOrgModalOpen}
                onClose={() => setIsAddOrgModalOpen(false)}
            />
        </div>
    );
};
