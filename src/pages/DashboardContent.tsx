import React from 'react';
import { StatsGrid } from '../blocks/dashboard/StatsGrid';
import { AlertList } from '../blocks/dashboard/AlertList';

export const DashboardContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
                <p className="text-muted-foreground text-base">Real-time safety compliance monitoring and system alerts.</p>
            </div>

            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
                <div className="space-y-8">
                    <AlertList />
                </div>
                <div className="space-y-8">
                    <div className="card flex flex-col items-center text-center gap-6">
                        <h3 className="text-lg font-bold">Compliance Score</h3>
                        <div className="w-36 h-36 rounded-full border-[8px] border-success flex flex-col items-center justify-center relative">
                            <span className="text-4xl font-extrabold text-success">94</span>
                            <span className="text-sm text-muted-foreground -mt-1">/100</span>
                        </div>
                        <p className="text-sm text-muted-foreground">System is currently within safety limits.</p>
                        <button className="btn btn-outline w-full">View Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
