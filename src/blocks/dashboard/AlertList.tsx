import React from 'react';
import { AlertCircle, Clock, Info } from 'lucide-react';

const alerts = [
    {
        id: 1,
        type: 'critical',
        title: 'Expired SDS Detected',
        description: '3 SDS items for Acetone have expired and need immediate review.',
        time: '10 mins ago'
    },
    {
        id: 2,
        type: 'warning',
        title: 'Incomplete Audit',
        description: 'Q4 compliance audit for Organization B is missing manufacturer signatures.',
        time: '2 hours ago'
    },
    {
        id: 3,
        type: 'info',
        title: 'System Update',
        description: 'A new safety regulation (EU 2024/123) has been added to the database.',
        time: '5 hours ago'
    },
];

export const AlertList: React.FC = () => {
    return (
        <div className="card !p-0 overflow-hidden">
            <div className="px-6 py-5 flex items-center justify-between border-b border-border">
                <h3 className="text-lg font-bold">System Alerts</h3>
                <button className="text-sm text-accent font-semibold hover:underline">View All</button>
            </div>
            <div className="flex flex-col">
                {alerts.map((alert) => (
                    <div key={alert.id} className="px-6 py-5 flex gap-4 border-b border-border last:border-b-0 hover:bg-black/5 transition-all">
                        <div className={`mt-0.5 ${alert.type === 'critical' ? 'text-destructive' : alert.type === 'warning' ? 'text-warning' : 'text-accent'
                            }`}>
                            {alert.type === 'critical' ? <AlertCircle size={20} /> : alert.type === 'warning' ? <Clock size={20} /> : <Info size={20} />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-[15px]">{alert.title}</span>
                                <span className="text-[11px] text-muted-foreground font-medium">{alert.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{alert.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
