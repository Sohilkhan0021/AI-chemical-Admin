import React from 'react';

export const ExportFilters: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground font-medium ">
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center justify-between ">
                    Chemical Name
                    <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground uppercase font-bold">Searchable</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter chemical name, e.g. Acetone"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Barcode / QR ID</label>
                <input
                    type="text"
                    placeholder="Enter ID, e.g. CHEM-12345"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Organization</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                    <option value="">All Organizations</option>
                    <option value="org1">Statoil Norway</option>
                    <option value="org2">Equinor ASA</option>
                    <option value="org3">Hydro</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Project</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                    <option value="">All Projects</option>
                    <option value="p1">Project North Star</option>
                    <option value="p2">Oslo Refinery</option>
                    <option value="p3">Troll Field A</option>
                </select>
            </div>
            <div className="space-y-2 border-t border-border/50 pt-4 md:col-span-2">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Date Range (Start)</label>
                        <input
                            type="date"
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all cursor-pointer"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Date Range (End)</label>
                        <input
                            type="date"
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all cursor-pointer"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">SDS Version</label>
                        <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                            <option value="latest">Latest Version Only</option>
                            <option value="all">Full Version History</option>
                            <option value="archive">Archived Only</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
