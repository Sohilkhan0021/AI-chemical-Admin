import React from 'react';
import {
    X,
    Clock,
    Box,
    Activity,
    Fingerprint,
    ArrowRight,
    ShieldCheck,
    Cpu,
    User,
    CalendarCheck
} from 'lucide-react';
import { Badge } from './Badge';

interface AuditLogDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    log: any;
}

export const AuditLogDetailModal: React.FC<AuditLogDetailModalProps> = ({ isOpen, onClose, log }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative w-full max-w-3xl max-h-[80vh] bg-white shadow-2xl rounded-3xl border border-border/50 animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 border-b border-border/10 bg-muted/5 relative">
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 p-2 hover:bg-muted rounded-xl transition-all"
                    >
                        <X size={20} className="text-muted-foreground" />
                    </button>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <Badge variant={log.status === 'Success' ? 'success' : 'error'}>
                                {log.status}
                            </Badge>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{log.id}</span>
                        </div>
                        <h2 className="text-xl font-bold text-foreground tracking-tight line-clamp-2">{log.eventType}</h2>
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1.5 font-medium text-xs">
                                <Clock size={14} className="text-accent" />
                                {log.timestamp}
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border" />
                            <div className="flex items-center gap-1.5 font-medium text-xs">
                                <Box size={14} className="text-accent" />
                                {log.entityType}: {log.entityId}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                    {/* Event Description */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <Activity size={14} className="text-accent" />
                            Activity Description
                        </h3>
                        <div className="p-5 bg-muted/30 rounded-2xl border border-border/20">
                            <p className="text-[14px] leading-relaxed text-foreground font-normal">
                                {log.details}
                            </p>
                        </div>
                    </div>

                    {/* Value Comparison */}
                    {log.oldValue || log.newValue ? (
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <Fingerprint size={14} className="text-accent" />
                                Data Changes
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center bg-muted/20 p-5 rounded-2xl border border-border/10">
                                {log.oldValue ? (
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase px-1">Original Value</span>
                                        <div className="bg-destructive/5 text-destructive font-mono text-xs p-3 rounded-lg border border-destructive/10 leading-relaxed min-h-[40px] flex items-center">
                                            {log.oldValue}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:block" />
                                )}

                                {log.oldValue && log.newValue && (
                                    <div className="flex justify-center md:pt-4">
                                        <div className="p-1.5 bg-white rounded-full border border-border shadow-sm">
                                            <ArrowRight size={14} className="text-accent" />
                                        </div>
                                    </div>
                                )}

                                {log.newValue ? (
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase px-1">Updated Value</span>
                                        <div className="bg-success/5 text-success font-mono text-xs p-3 rounded-lg border border-success/10 leading-relaxed min-h-[40px] flex items-center">
                                            {log.newValue}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:block" />
                                )}
                            </div>
                        </div>
                    ) : null}

                    {/* Meta Info: Trigger Source & Actor */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white border border-border/40 rounded-2xl shadow-sm space-y-1.5">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                {log.triggerSource === 'System' ? <Cpu size={14} /> : log.triggerSource === 'Scheduler' ? <CalendarCheck size={14} /> : <User size={14} />}
                                Trigger Source
                            </div>
                            <span className="text-sm font-semibold text-foreground block">{log.triggerSource}</span>
                        </div>
                        <div className="p-4 bg-white border border-border/40 rounded-2xl shadow-sm space-y-1.5">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                <Fingerprint size={14} />
                                Performed By
                            </div>
                            <span className="text-sm font-semibold text-accent block truncate">{log.performedBy}</span>
                        </div>
                    </div>

                    {/* Compliance Rules Notice */}
                    <div className="p-5 bg-warning/5 rounded-2xl border border-warning/20 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-warning" />
                            <h4 className="text-[11px] font-bold text-warning uppercase tracking-wider">Compliance Assurance</h4>
                        </div>
                        <p className="text-xs font-medium leading-relaxed text-warning/80">
                            This audit record is sealed and immutable. No modifications have been made to this log since its initial creation.
                            <br /><br />
                            <span className="italic opacity-80 font-normal">"Audit logs are immutable for compliance and traceability."</span>
                        </p>
                    </div>
                </div>

                {/* Footer Section (Decorative/Read-only) */}
                <div className="px-8 py-4 bg-muted/5 flex justify-center border-t border-border/10">
                    <span className="text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-[0.3em]">Read-Only Entry</span>
                </div>
            </div>
        </div>
    );
};
