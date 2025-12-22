import React, { useState } from 'react';
import {
    Download,
    Filter,
    Settings2,
    History,
    Activity,
    FileText,
    FileSpreadsheet,
    FileCode,
    ShieldAlert
} from 'lucide-react';
import { ExportFilters } from '../blocks/export/ExportFilters';
import { ExportOptions } from '../blocks/export/ExportOptions';
import { ExportStatus } from '../blocks/export/ExportStatus';
import { ExportHistory } from '../blocks/export/ExportHistory';

export const ExportContent: React.FC = () => {
    const [exportFormat, setExportFormat] = useState<'pdf' | 'excel' | 'word'>('pdf');

    return (
        <div className="flex flex-col gap-8 pb-12">
            <div className="flex justify-between items-start">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Export Center</h1>
                    <p className="text-muted-foreground text-base">Generate and download SDS reports and data exports.</p>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-1.5 rounded-2xl border border-border">
                    <button
                        onClick={() => setExportFormat('pdf')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${exportFormat === 'pdf' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-muted-foreground hover:bg-muted'
                            }`}
                    >
                        <FileText size={18} />
                        <span className="text-sm font-semibold">PDF</span>
                    </button>
                    <button
                        onClick={() => setExportFormat('excel')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${exportFormat === 'excel' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-muted-foreground hover:bg-muted'
                            }`}
                    >
                        <FileSpreadsheet size={18} />
                        <span className="text-sm font-semibold">Excel</span>
                    </button>
                    <button
                        onClick={() => setExportFormat('word')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${exportFormat === 'word' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-muted-foreground hover:bg-muted'
                            }`}
                    >
                        <FileCode size={18} />
                        <span className="text-sm font-semibold">Word</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Filters Section */}
                    <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Filter size={18} className="text-accent" />
                                <h2 className="text-lg font-semibold tracking-tight">Data Selection</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <ExportFilters />
                        </div>
                    </section>

                    {/* Export Options */}
                    <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Settings2 size={18} className="text-accent" />
                                <h2 className="text-lg font-semibold tracking-tight">Export Configuration</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <ExportOptions />
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 flex gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                            <ShieldAlert size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-accent mb-1">AI Translation & Summary Disclaimer</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                AI summaries and translations assist in accessibility but do not replace the official supplier Safety Data Sheet (SDS).
                                Always refer to the original document for critical safety decisions and regulatory compliance.
                            </p>
                        </div>
                    </div>

                    {/* Export Button */}
                    <button className="w-full btn btn-primary py-4 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-xl shadow-accent/20 hover:scale-[1.01] transition-all">
                        <Download size={22} />
                        Start Data Export ({exportFormat.toUpperCase()})
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Active Status */}
                    <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Activity size={18} className="text-accent" />
                                <h2 className="text-lg font-semibold tracking-tight">Export Status</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <ExportStatus />
                        </div>
                    </section>

                    {/* Recent History */}
                    <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <History size={18} className="text-accent" />
                                <h2 className="text-lg font-semibold tracking-tight">Recent History</h2>
                            </div>
                        </div>
                        <div className="p-0">
                            <ExportHistory />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
