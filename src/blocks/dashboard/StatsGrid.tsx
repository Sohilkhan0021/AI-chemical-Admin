import React from 'react';
import {
    FileText,
    AlertTriangle,
    Users,
    CheckCircle2
} from 'lucide-react';

const stats = [
    { label: 'Total SDS', value: '1,284', icon: <FileText size={24} />, color: 'bg-blue-500/10 text-blue-500' },
    { label: 'Pending Review', value: '12', icon: <AlertTriangle size={24} />, color: 'bg-amber-500/10 text-amber-500' },
    { label: 'Total Users', value: '48', icon: <Users size={24} />, color: 'bg-indigo-500/10 text-indigo-500' },
    { label: 'Compliance Rate', value: '98.2%', icon: <CheckCircle2 size={24} />, color: 'bg-emerald-500/10 text-emerald-500' },
];

export const StatsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="card flex items-center gap-5 p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                        {stat.icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                        <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
