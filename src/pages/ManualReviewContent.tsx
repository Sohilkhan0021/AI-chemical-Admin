import React, { useState } from 'react';
import {
    Search,
    Filter,
    Eye,
    CheckCircle2,
    Cpu,
    ScanText,
    UserCircle
} from 'lucide-react';
import { Badge } from '../components/Badge';
import { ReviewDetailModal } from '../components/ReviewDetailModal';

// Mock data for Manual Review
const mockReviewData = [
    {
        id: 'REV-001',
        name: 'Hydrochloric Acid 37%',
        source: 'AI',
        missingSections: ['Hazard ID', 'First Aid'],
        language: 'EN',
        status: 'Needs Review',
        uploadedBy: 'System AI',
        lastUpdated: '2025-12-21 14:20',
        cas: '7647-01-0'
    },
    {
        id: 'REV-002',
        name: 'Methanol Pure',
        source: 'OCR',
        missingSections: ['Disposal'],
        language: 'EN',
        status: 'In Progress',
        uploadedBy: 'J. Doe (Admin)',
        lastUpdated: '2025-12-21 15:05',
        cas: '67-56-1'
    },
    {
        id: 'REV-003',
        name: 'Ethanol 99%',
        source: 'Manual',
        missingSections: [],
        language: 'EN',
        status: 'Needs Review',
        uploadedBy: 'S. Smith (Manager)',
        lastUpdated: '2025-12-20 09:45',
        cas: '64-17-5'
    },
];

export const ManualReviewContent: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenReview = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-black  tracking-tight">Manual Review Queue</h1>
                <p className="text-muted-foreground text-sm">Verify AI-parsed SDS data and ensure compliance before final approval.</p>
            </div>

            {/* Filters & Search */}
            <div className="card flex flex-wrap gap-4 items-center shadow-sm">
                <div className="flex-1 min-w-[300px] flex items-center gap-3 bg-muted px-4 py-2.5 rounded-xl border border-transparent focus-within:border-accent/30 transition-all">
                    <Search size={18} className="text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by SDS name or ID..."
                        className="bg-transparent border-none outline-none w-full text-sm text-foreground"
                    />
                </div>
                <div className="flex gap-3">
                    <select className="bg-card border border-border rounded-xl px-4 py-2 text-sm outline-none focus:border-accent transition-all cursor-pointer shadow-sm">
                        <option value="">All Sources</option>
                        <option value="AI">AI Extracted</option>
                        <option value="OCR">OCR Scanned</option>
                        <option value="Manual">Manual Upload</option>
                    </select>
                    <select className="bg-card border border-border rounded-xl px-4 py-2 text-sm outline-none focus:border-accent transition-all cursor-pointer shadow-sm">
                        <option value="">Status: All</option>
                        <option value="Needs Review">Needs Review</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                    <button className="p-2.5 border border-border rounded-xl hover:bg-muted transition-all shadow-sm">
                        <Filter size={18} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Results Table */}
            <div className="card p-0 overflow-hidden shadow-xl border border-border/40">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th className="py-5 font-bold text-foreground">SDS Name</th>
                            <th className="py-5 font-bold text-foreground">Source</th>
                            <th className="py-5 font-bold text-foreground">Missing Info</th>
                            <th className="py-5 font-bold text-foreground text-center">Language</th>
                            <th className="py-5 font-bold text-foreground">Status</th>
                            <th className="py-5 font-bold text-foreground text-right w-16">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                        {mockReviewData.map((item) => (
                            <tr key={item.id} className="hover:bg-accent/5 transition-all group " >
                                <td className="py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-foreground group-hover:text-accent transition-colors">{item.name}</span>
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase">{item.id} • CAS: {item.cas}</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        {item.source === 'AI' && <Cpu size={14} className="text-blue-500" />}
                                        {item.source === 'OCR' && <ScanText size={14} className="text-orange-500" />}
                                        {item.source === 'Manual' && <UserCircle size={14} className="text-green-500" />}
                                        <span className="text-xs font-medium text-muted-foreground">{item.source}</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {item.missingSections.length > 0 ? (
                                            item.missingSections.map((sec, i) => (
                                                <span key={i} className="text-[9px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                                    {sec}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-[9px] bg-success/10 text-success px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                                                <CheckCircle2 size={10} /> Complete
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-2 text-center">
                                    <div className="flex items-center justify-center gap-1.5">
                                        {/* <Languages size={12} className="text-muted-foreground" /> */}
                                        <span className="text-xs font-bold text-foreground mr-10">{item.language}</span>
                                    </div>
                                </td>
                                <td className="py-4 ml-4">
                                    <Badge variant={item.status === 'Needs Review' ? 'warning' : 'secondary'}>
                                        {item.status}
                                    </Badge>
                                </td>
                                <td className="py-4 text-right">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleOpenReview(item); }}
                                        className="p-2 rounded-lg hover:bg-accent hover:text-white transition-all text-muted-foreground group/eye shadow-sm"
                                    >
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-4 flex justify-between items-center bg-muted/20 border-t border-border/30">
                    <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest">3 items in queue</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-bold border border-border rounded-lg bg-card text-muted-foreground opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 text-xs font-bold border border-accent rounded-lg bg-accent text-white">1</button>
                        <button className="px-3 py-1 text-xs font-bold border border-border rounded-lg bg-card">Next</button>
                    </div>
                </div>
            </div>

            {selectedItem && (
                <ReviewDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    item={selectedItem}
                />
            )}
        </div>
    );
};
