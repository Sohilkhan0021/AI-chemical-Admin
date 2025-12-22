import React from 'react';
import {
    X,
    Users,
    Layers,
    MapPin,
    ShieldCheck,
    Trophy,
    ArrowUpRight,
    Building2,
    Calendar,
    Globe
} from 'lucide-react';
import { Badge } from './Badge';

interface OrganizationDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    org: any;
}

export const OrganizationDetailModal: React.FC<OrganizationDetailModalProps> = ({ isOpen, onClose, org }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative w-full max-w-4xl max-h-[85vh] bg-white shadow-2xl rounded-3xl border border-border/50 animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden text-foreground">
                {/* Header */}
                <div className="px-8 py-6 border-b border-border/10 bg-muted/5 relative">
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 p-2 hover:bg-muted rounded-xl transition-all"
                    >
                        <X size={20} className="text-muted-foreground" />
                    </button>

                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-accent/20 shrink-0">
                            {org.logo}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold tracking-tight">{org.name}</h2>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-lg border border-border/50 uppercase tracking-widest">
                                    <Building2 size={12} className="text-accent" />
                                    {org.regId}
                                </div>
                                <Badge variant={org.status === 'Active' ? 'success' : 'secondary'}>{org.status}</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Stats & Meta */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Key Stats */}
                            <div className="grid grid-cols-1 gap-3">
                                <div className="p-4 bg-muted/30 rounded-2xl border border-border/20 flex items-center justify-between group hover:border-accent/30 transition-all">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Total SDS Registry</span>
                                        <span className="text-xl font-bold">{org.totalSds}</span>
                                    </div>
                                    <div className="p-2.5 bg-accent/10 text-accent rounded-xl">
                                        <Layers size={20} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-warning/5 rounded-2xl border border-warning/10 flex flex-col gap-0.5 hover:border-warning/30 transition-all">
                                        <span className="text-[10px] font-bold text-warning uppercase tracking-wider">Pending</span>
                                        <span className="text-xl font-bold text-warning">{org.pendingReview}</span>
                                    </div>
                                    <div className="p-4 bg-destructive/5 rounded-2xl border border-destructive/10 flex flex-col gap-0.5 hover:border-destructive/30 transition-all">
                                        <span className="text-[10px] font-bold text-destructive uppercase tracking-wider">Expired</span>
                                        <span className="text-xl font-bold text-destructive">{org.expiredSds}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Meta Info */}
                            <div className="space-y-3">
                                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-1">Meta Information</h4>
                                <div className="bg-muted/20 border border-border/20 rounded-2xl overflow-hidden divide-y divide-border/20">
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <Calendar size={14} className="text-muted-foreground" />
                                            <span className="text-xs font-medium text-muted-foreground">Registered Date</span>
                                        </div>
                                        <span className="text-xs font-semibold">{org.createdDate}</span>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <Globe size={14} className="text-muted-foreground" />
                                            <span className="text-xs font-medium text-muted-foreground">Operating Region</span>
                                        </div>
                                        <span className="text-xs font-semibold">{org.region}</span>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <MapPin size={14} className="text-muted-foreground" />
                                            <span className="text-xs font-medium text-muted-foreground">Headquarters</span>
                                        </div>
                                        <span className="text-xs font-semibold">Multiple Sites ({org.locations})</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Assets & Compliance */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Enterprise Structure */}
                            <div className="space-y-3">
                                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-1">Infrastructure Summary</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-white border border-border/50 rounded-2xl shadow-sm hover:border-accent/40 transition-all flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-muted rounded-lg text-muted-foreground">
                                                <Trophy size={14} />
                                            </div>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Active Projects</span>
                                        </div>
                                        <span className="text-lg font-bold">{org.projects} Active Initiatives</span>
                                    </div>
                                    <div className="p-4 bg-white border border-border/50 rounded-2xl shadow-sm hover:border-accent/40 transition-all flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-muted rounded-lg text-muted-foreground">
                                                <Users size={14} />
                                            </div>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Workforce</span>
                                        </div>
                                        <span className="text-lg font-bold">{org.assignedUsers} Managed Users</span>
                                    </div>
                                </div>
                            </div>

                            {/* Compliance Snapshot */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-success" />
                                        Compliance Portfolio
                                    </h4>
                                    <button className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 hover:text-accent-secondary transition-all">
                                        Dashboard <ArrowUpRight size={12} />
                                    </button>
                                </div>
                                <div className="grid gap-3">
                                    {[
                                        { label: 'GHS Classification', value: 92, status: 'success' },
                                        { label: 'CLP Regulation', value: 98, status: 'success' },
                                        { label: 'REACH Compliance', value: 65, status: 'warning' }
                                    ].map((item) => (
                                        <div key={item.label} className="p-4 bg-muted/20 border border-border/10 rounded-2xl space-y-2.5">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs font-semibold">{item.label}</span>
                                                <span className={`text-[10px] font-bold uppercase tracking-wider ${item.status === 'success' ? 'text-success' : 'text-warning'}`}>
                                                    {item.value}% Correct
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-700 ${item.status === 'success' ? 'bg-success shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'bg-warning shadow-[0_0_8px_rgba(234,179,8,0.3)]'}`}
                                                    style={{ width: `${item.value}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="px-8 py-5 border-t border-border/10 bg-muted/5 flex items-center justify-end gap-3">
                    <button className="px-6 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all">
                        Edit Organization
                    </button>
                    <button className="px-6 py-2.5 text-xs font-bold bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all">
                        View Full SDS Registry
                    </button>
                </div>
            </div>
        </div>
    );
};
