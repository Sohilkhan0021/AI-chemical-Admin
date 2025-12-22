import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Eye,
    MoreVertical,
    Download,
    Edit2
} from 'lucide-react';
import { Badge } from '../../components/Badge';

const dummyDocs = [
    { id: 'SDS-9921', name: 'Acetone Technical Grade', cas: '67-64-1', version: 'v2.4', manufacturer: 'ChemCorp Industrial', status: 'Approved', date: '2024-12-10' },
    { id: 'SDS-1042', name: 'Sulfuric Acid 98%', cas: '7664-93-9', version: 'v4.1', manufacturer: 'Global Acids Ltd', status: 'Pending', date: '2024-12-18' },
    { id: 'SDS-8832', name: 'Isopropyl Alcohol', cas: '67-63-0', version: 'v1.2', manufacturer: 'PureChem Solutions', status: 'Expired', date: '2023-05-22' },
    { id: 'SDS-4401', name: 'Sodium Hydroxide Pellets', cas: '1310-73-2', version: 'v3.0', manufacturer: 'ChemCorp Industrial', status: 'Approved', date: '2024-11-05' },
];

export const SDSTable: React.FC = () => {
    const navigate = useNavigate();
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdownId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <div className="card !p-0 overflow-hidden">
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>CAS Number</th>
                        <th>Version</th>
                        <th>Manufacturer</th>
                        <th>Status</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyDocs.map((doc) => (
                        <tr key={doc.id} className="hover:bg-black/5 transition-all">
                            <td className="font-mono text-accent font-medium text-xs">{doc.id}</td>
                            <td className="font-bold text-foreground">{doc.name}</td>
                            <td className="text-muted-foreground">{doc.cas}</td>
                            <td><Badge variant="outline">{doc.version}</Badge></td>
                            <td className="text-muted-foreground">{doc.manufacturer}</td>
                            <td>
                                <Badge variant={doc.status === 'Approved' ? 'success' : doc.status === 'Pending' ? 'warning' : 'error'}>
                                    {doc.status}
                                </Badge>
                            </td>
                            <td className="relative">
                                <div className="flex justify-center">
                                    <button
                                        onClick={(e) => toggleDropdown(doc.id, e)}
                                        className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${openDropdownId === doc.id
                                            ? 'bg-accent text-white'
                                            : 'text-outline hover:bg-muted hover:text-foreground'
                                            }`}
                                    >
                                        <MoreVertical size={16} />
                                    </button>

                                    {openDropdownId === doc.id && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute right-0 top-10 w-48 bg-white border border-border rounded-lg shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in duration-200"
                                        >
                                            <button
                                                onClick={() => navigate(`/sds/${doc.id}`)}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left"
                                            >
                                                <Eye size={16} className="text-slate-400" />
                                                <span>View Details</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left">
                                                <Download size={16} className="text-slate-400" />
                                                <span>Download PDF</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left border-t border-slate-100">
                                                <Edit2 size={16} className="text-slate-400" />
                                                <span>Edit SDS</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="px-6 py-4 flex justify-between items-center bg-muted/30 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">Showing 4 of 1,284 results</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-card disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 text-xs font-bold border border-accent rounded-md bg-accent text-white">1</button>
                    <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-card">2</button>
                    <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-card">Next</button>
                </div>
            </div>
        </div>
    );
};
