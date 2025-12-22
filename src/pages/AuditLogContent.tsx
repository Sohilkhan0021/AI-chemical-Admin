import React, { useState } from 'react';
import {Search,Filter,Calendar,FileText,User,Eye,ShieldAlert,ArrowUpDown,Download} from 'lucide-react';
import { Badge } from '../components/Badge';
import { AuditLogDetailModal } from '../components/AuditLogDetailModal';

// Mock data for Audit Logs
const mockAuditLogs = [
    {
        id: 'LOG-1029',
        timestamp: '2025-05-15 14:32:05',
        eventType: 'SDS Created',
        entityType: 'SDS',
        entityId: 'SD-9921',
        performedBy: 'sohil@ai-chem.com',
        summary: 'New SDS uploaded and initial AI parsing completed.',
        status: 'Success',
        details: 'Initial upload of "Industrial Grade Acetone" SDS document. AI Extraction confidence at 94%.',
        oldValue: null,
        newValue: 'All fields extracted from PDF context.',
        triggerSource: 'User'
    },
    {
        id: 'LOG-1028',
        timestamp: '2025-05-15 12:10:44',
        eventType: 'Manual Review',
        entityType: 'SDS',
        entityId: 'SD-8812',
        performedBy: 'System',
        summary: 'SDS flagged for manual review due to low confidence scores.',
        status: 'Success',
        details: 'SDS "High Flow Polymer" triggered manual review workflow because section 3 (Composition) confidence was < 70%.',
        oldValue: 'Confidence: 68%',
        newValue: 'Status: Needs Review',
        triggerSource: 'System'
    },
    {
        id: 'LOG-1027',
        timestamp: '2025-05-14 18:05:22',
        eventType: 'User Action',
        entityType: 'User',
        entityId: 'USR-221',
        performedBy: 'admin@ai-chem.com',
        summary: 'User role updated from Viewer to Editor.',
        status: 'Success',
        details: 'Permissions updated for user "john.doe@enterprise.com". Added write access to SDS registry.',
        oldValue: 'Role: Viewer',
        newValue: 'Role: Editor',
        triggerSource: 'User'
    },
    {
        id: 'LOG-1026',
        timestamp: '2025-05-14 09:00:00',
        eventType: 'Re-validated',
        entityType: 'Organization',
        entityId: 'ORG-001',
        performedBy: 'Scheduler',
        summary: 'Monthly compliance re-validation batch triggered.',
        status: 'Success',
        details: 'Scheduled job "MONTHLY_REVAL" executed for Global Chemicals Inc. 450 SDS checked.',
        oldValue: 'Last Check: 2025-04-14',
        newValue: 'Last Check: 2025-05-14',
        triggerSource: 'Scheduler'
    },
    {
        id: 'LOG-1025',
        timestamp: '2025-05-13 16:45:12',
        eventType: 'Export',
        entityType: 'SDS',
        entityId: 'SD-7712',
        performedBy: 'manager@enterprise.com',
        summary: 'Compliance report exported (PDF format).',
        status: 'Failed',
        details: 'Attempt to export bulk compliance report failed due to timeout in PDF generation service.',
        oldValue: null,
        newValue: 'Error: SERVICE_TIMEOUT',
        triggerSource: 'User'
    },
];

export const AuditLogContent: React.FC = () => {
    const [selectedLog, setSelectedLog] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOpenDetails = (log: any) => {
        setSelectedLog(log);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
            {/* Page Header */}
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black  tracking-tight">Audit Logs</h1>
                    <p className="text-muted-foreground text-sm font-medium">View all system activities for compliance and traceability.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-outline gap-2 bg-white shadow-sm hover:border-accent/40 hover:text-accent transition-all">
                        <Download size={18} /> Export Results
                    </button>
                    <div className="px-5 py-3 bg-muted/40 rounded-2xl border border-border/30 flex items-center gap-3 shadow-inner">
                        <ShieldAlert size={18} className="text-muted-foreground" />
                        <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">Compliance: Read-Only Access</span>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end shadow-sm">
                <div className="lg:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Search Logs</label>
                    <div className="flex items-center gap-3 bg-muted/50 px-4 py-3 rounded-2xl border border-transparent focus-within:border-accent/30 focus-within:bg-white transition-all shadow-inner">
                        <Search size={16} className="text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by Entity ID or User..."
                            className="bg-transparent border-none outline-none w-full text-sm text-foreground placeholder:text-muted-foreground/60"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Event Type</label>
                    <select className="bg-white border border-border/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-all cursor-pointer shadow-sm">
                        <option value="">All Events</option>
                        <option value="SDS Created">SDS Created</option>
                        <option value="SDS Updated">SDS Updated</option>
                        <option value="Re-validated">Re-validated</option>
                        <option value="Export">Export</option>
                        <option value="Manual Review">Manual Review</option>
                        <option value="User Action">User Action</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Date Range</label>
                    <div className="flex items-center gap-2 bg-white border border-border/60 rounded-xl px-4 py-3 shadow-sm hover:border-accent transition-all cursor-pointer">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span className="text-sm text-foreground">Select Range</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex-1 p-3 bg-white border border-border/60 rounded-xl hover:bg-muted transition-all shadow-sm flex items-center justify-center gap-2 text-sm font-bold">
                        <Filter size={16} className="text-muted-foreground" />
                        Advanced
                    </button>
                    <button className="p-3 bg-white border border-border/60 rounded-xl hover:bg-muted transition-all shadow-sm">
                        <ArrowUpDown size={16} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Audit Log Table */}
            <div className="card !p-0 overflow-hidden shadow-2xl border border-border/30 bg-white/80 backdrop-blur-md">
                <table className="admin-table">
                    <thead>
                        <tr className="bg-muted/40 border-b border-border/30">
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest text-center w-12">#</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest">Timestamp</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest">Event Type</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest">Entity</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest">Performed By</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest">Action Summary</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest text-center">Status</th>
                            <th className="py-6 font-black text-foreground text-[11px] uppercase tracking-widest text-right px-8">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/10">
                        {mockAuditLogs.map((log, idx) => (
                            <tr
                                key={log.id}
                                className="group hover:bg-accent/[0.03] transition-all  border-l-2 border-l-transparent hover:border-l-accent"
                            >
                                <td className="py-5 px-4 text-center">
                                    <span className="text-[10px] font-mono text-muted-foreground/60">{idx + 1}</span>
                                </td>
                                <td className="py-5 px-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-foreground">{log.timestamp.split(' ')[0]}</span>
                                        <span className="text-[10px] font-medium text-muted-foreground">{log.timestamp.split(' ')[1]}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2 rounded-lg ${log.eventType.includes('SDS') ? 'bg-blue-50 text-blue-600' :
                                                log.eventType.includes('User') ? 'bg-purple-50 text-purple-600' :
                                                    log.eventType.includes('Manual') ? 'bg-warning/10 text-warning' :
                                                        'bg-muted text-muted-foreground'
                                            }`}>
                                            <FileText size={14} />
                                        </div>
                                        <span className="text-sm font-bold text-foreground">{log.eventType}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-tight">{log.entityType}</span>
                                        <code className="text-xs font-mono font-bold text-accent">{log.entityId}</code>
                                    </div>
                                </td>
                                <td className="py-5 px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center">
                                            <User size={12} className="text-muted-foreground" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{log.performedBy}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-4 max-w-[300px]">
                                    <p className="text-sm text-foreground font-medium line-clamp-2 leading-relaxed">{log.summary}</p>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <Badge variant={log.status === 'Success' ? 'success' : 'error'}>
                                        {log.status}
                                    </Badge>
                                </td>
                                <td className="py-5 px-8 text-right">
                                    <button
                                        className="p-2.5 bg-white rounded-full transition-all shadow-sm group-hover:scale-110"
                                        onClick={(e) => { e.stopPropagation(); handleOpenDetails(log); }}
                                    >
                                        <Eye size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer Section with Compliance Note */}
                <div className="flex flex-col divide-y divide-border/10">
                    <div className="px-8 py-4 bg-muted/10 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <ShieldAlert size={16} className="text-warning" />
                            <span className="text-xs font-bold text-muted-foreground italic tracking-tight">
                                Audit logs are immutable and cannot be modified or deleted.
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-5 py-2.5 text-xs font-black border border-border/50 rounded-xl bg-white text-muted-foreground opacity-50 ">Previous</button>
                            <button className="px-5 py-2.5 text-xs font-black border border-accent/20 rounded-xl bg-accent text-white">1</button>
                            <button className="px-5 py-2.5 text-xs font-black  rounded-xl bg-white hover:bg-muted ">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            {selectedLog && (
                <AuditLogDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    log={selectedLog}
                />
            )}
        </div>
    );
};
