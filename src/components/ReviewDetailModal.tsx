import React from 'react';
import {
    X,
    CheckCircle2,
    XCircle,
    Info,
    Clock,
    FileText,
    ShieldCheck,
    History,
    AlertCircle,
    User,
    Cpu
} from 'lucide-react';

interface ReviewDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: any;
}

export const ReviewDetailModal: React.FC<ReviewDetailModalProps> = ({ isOpen, onClose, item }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
            <div className="relative bg-card w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl border border-border/50 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-border/40 bg-muted/30">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-black text-foreground">{item.name}</h2>
                            <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Compliance Review</span>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                            <FileText size={12} /> ID: {item.id} • CAS: {item.cas} • Source: {item.source}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-xl transition-all">
                        <X size={20} className="text-muted-foreground" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left & Middle Column: Data Comparison */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Comparison Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Original Content */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                    <FileText size={16} className="text-muted-foreground" />
                                    Original SDS Snippets
                                </h3>
                                <div className="p-4 bg-muted rounded-2xl min-h-[400px] text-[13px] leading-relaxed text-foreground/80 font-mono border border-border/30">
                                    [SECTION 1: PRODUCT IDENTIFICATION]<br />
                                    Product Name: {item.name}<br />
                                    Product Number: {item.id}<br />
                                    Molecular Weight: 36.46 g/mol<br /><br />
                                    [SECTION 2: HAZARDS IDENTIFICATION]<br />
                                    Classification according to Regulation (EC)...<br />
                                    H314: Causes severe skin burns and eye damage.<br />
                                    H335: May cause respiratory irritation.<br /><br />
                                    {item.missingSections.length > 0 ? (
                                        <div className="p-3 bg-destructive/10 rounded-lg text-destructive font-bold flex items-center gap-2 mt-4 animate-pulse">
                                            <AlertCircle size={14} /> Missing data detected for these sections
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            {/* Parsed Content */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold text-foreground flex items-center gap-2 text-accent">
                                    <ShieldCheck size={16} />
                                    AI-Parsed Results
                                </h3>
                                <div className="flex flex-col gap-4">
                                    <div className="p-4 bg-accent/5 border border-accent/20 rounded-2xl">
                                        <h4 className="text-xs font-black uppercase text-accent mb-2">Section 1: Identity</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs py-1 border-b border-accent/10">
                                                <span className="text-muted-foreground">Name</span>
                                                <span className="font-bold">{item.name}</span>
                                            </div>
                                            <div className="flex justify-between text-xs py-1">
                                                <span className="text-muted-foreground">CAS Number</span>
                                                <span className="font-bold">{item.cas}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`p-4 border rounded-2xl transition-all ${item.missingSections.includes('Hazard ID') ? 'border-destructive/30 bg-destructive/5' : 'border-border bg-card'}`}>
                                        <h4 className={`text-xs font-black uppercase mb-2 ${item.missingSections.includes('Hazard ID') ? 'text-destructive' : 'text-foreground'}`}>Section 2: Hazard Identification</h4>
                                        {item.missingSections.includes('Hazard ID') ? (
                                            <p className="text-xs text-destructive italic">⚠️ Section was present in original but parser failed to extract structured values.</p>
                                        ) : (
                                            <div className="text-xs font-medium">Class: Corrosive Substance, Category 1</div>
                                        )}
                                    </div>

                                    <div className="p-4 bg-card border border-border rounded-2xl">
                                        <h4 className="text-xs font-black uppercase text-foreground mb-2">Section 3: Composition</h4>
                                        <div className="text-xs font-medium">Purity: &gt;99.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Summary Section */}
                        <div className="bg-muted p-6 rounded-3xl flex flex-col gap-4 border border-border/40">
                            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                                <Cpu size={18} className="text-accent" />
                                AI Intelligent Summary
                            </div>
                            <p className="text-xs text-muted-foreground italic leading-relaxed">
                                "The parsing engine identified {item.name} with a high confidence score of 94% on chemical identity. However, Section 2 (Hazard ID) was difficult to parse due to non-standard formatting in the original document. Recommend manual verification of H-statements."
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 border-t border-border/20 pt-4">
                                <Info size={12} />
                                Disclaimer: AI summaries are for guidance only. Regulatory compliance requires human sign-off.
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Audit Trail & Actions */}
                    <div className="flex flex-col gap-8 h-full border-l border-border/40 pl-8">
                        {/* Audit Trail */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                <History size={16} className="text-muted-foreground" />
                                Audit Trail
                            </h3>
                            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-border/40">
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-success flex items-center justify-center border-4 border-card">
                                        <CheckCircle2 size={10} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-foreground">SDS Uploaded</span>
                                        <span className="text-[10px] text-muted-foreground">{item.uploadedBy} • {item.lastUpdated}</span>
                                    </div>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center border-4 border-card">
                                        <Cpu size={10} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-foreground">AI Analysis Complete</span>
                                        <span className="text-[10px] text-muted-foreground">System Engine v4.2 • Shortly after upload</span>
                                    </div>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-warning flex items-center justify-center border-4 border-card">
                                        <Clock size={10} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-foreground">Manual Review Triggered</span>
                                        <span className="text-[10px] text-muted-foreground">Flagged: {item.missingSections.length} items to address</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviewer Details */}
                        <div className="mt-auto flex flex-col gap-4">
                            <div className="flex items-center gap-3 p-4 bg-muted rounded-2xl border border-border/30">
                                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground">
                                    <User size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-foreground">You (Current Reviewer)</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Admin Level 3</span>
                                </div>
                            </div>

                            <button className="w-full btn bg-success hover:bg-success/90 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold shadow-lg shadow-success/20 transition-all border-none">
                                <CheckCircle2 size={18} />
                                Approve SDS
                            </button>
                            <button className="w-full btn bg-destructive/10 hover:bg-destructive text-destructive hover:text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all border border-destructive/20">
                                <XCircle size={18} />
                                Reject & Flag Issues
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
