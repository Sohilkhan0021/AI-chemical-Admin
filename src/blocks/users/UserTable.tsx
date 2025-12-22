import React, { useState, useRef, useEffect } from 'react';
import {
    Eye,
    MoreVertical,
    UserMinus,
    Edit2,
    Shield
} from 'lucide-react';
import { Badge } from '../../components/Badge';

const dummyUsers = [
    { id: 'USR-001', name: 'Core techies', email: 'coretheis@gmail.com', role: 'Admin', status: 'Active', lastLogin: '2024-12-20 09:45' },
    { id: 'USR-002', name: 'Sohil khan', email: 'sohil0021khan@gmail.com', role: 'Safety Officer', status: 'Active', lastLogin: '2024-12-21 11:20' },
    { id: 'USR-003', name: 'Rajat singh', email: 'rajat@gmail.com', role: 'Reviewer', status: 'Inactive', lastLogin: '2024-12-15 14:10' },
    { id: 'USR-004', name: 'Mukul gahlot', email: 'mukulcoretechies@gmail.com', role: 'Viewer', status: 'Active', lastLogin: '2024-12-19 16:30' },
    { id: 'USR-005', name: 'Satyam jain', email: 'satyam2004jain@gmail.com', role: 'Safety Officer', status: 'Active', lastLogin: '2024-12-21 08:15' },
];

export const UserTable: React.FC = () => {
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
                        <th className="w-[30%]">User</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-black/5 transition-all">
                            <td>
                                <div className="flex flex-col">
                                    <span className="font-bold text-foreground">{user.name}</span>
                                    <span className="text-[11px] text-muted-foreground">{user.email}</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-1.5 font-medium">
                                    <Shield size={14} className="text-accent/50" />
                                    <span>{user.role}</span>
                                </div>
                            </td>
                            <td>
                                <Badge
                                    variant={user.status === 'Active' ? 'success' : 'error'}
                                >
                                    {user.status}
                                </Badge>
                            </td>
                            <td className="text-muted-foreground text-xs">
                                {user.lastLogin}
                            </td>
                            <td className="relative">
                                <div className="flex justify-center">
                                    <button
                                        onClick={(e) => toggleDropdown(user.id, e)}
                                        className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${openDropdownId === user.id
                                            ? 'bg-accent text-white'
                                            : 'text-outline hover:bg-muted hover:text-foreground'
                                            }`}
                                    >
                                        <MoreVertical size={16} />
                                    </button>

                                    {openDropdownId === user.id && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute right-0 top-10 w-48 bg-white border border-border rounded-lg shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in duration-200"
                                        >
                                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left">
                                                <Eye size={16} className="text-slate-400" />
                                                <span>View Profile</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left">
                                                <Edit2 size={16} className="text-slate-400" />
                                                <span>Edit User</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/5 transition-colors text-left border-t border-slate-100">
                                                <UserMinus size={16} />
                                                <span>Block User</span>
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
                <span className="text-xs text-muted-foreground font-medium uppercase">5 Registered Users</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-card disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 text-xs font-bold border border-accent rounded-md bg-accent text-white">1</button>
                    <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-card">Next</button>
                </div>
            </div>
        </div>
    );
};
