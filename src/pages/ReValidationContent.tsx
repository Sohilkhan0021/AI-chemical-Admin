import React from 'react';
import {
    Calendar,
    Settings,
    MoreHorizontal,
    Play,
    ChevronDown,
    Eye
} from 'lucide-react';
import { Badge } from '../components/Badge';

const scheduleData = [
    { days: 30, label: 'Days Schedule', active: false },
    { days: 90, label: 'Days Schedule', active: true },
    { days: 180, label: 'Days Schedule', active: false },
];

const validationItems = [
    { id: 1, name: 'Acetone Technical Grade', lastValidated: '01-08-2025', nextDue: '01-02-2026', status: 'In-place' },
    { id: 2, name: 'Sulfuric Acid 98%', lastValidated: '01-08-2025', nextDue: '01-02-2026', status: 'Pending' },
    { id: 3, name: 'Isopropyl Alcohol', lastValidated: '01-08-2025', nextDue: '01-02-2026', status: 'In-place' },
];

export const ReValidationContent: React.FC = () => {
    const [selectedDays, setSelectedDays] = React.useState<number>(90);

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex justify-between items-center bg-card p-4 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                        <Calendar size={20} className="text-foreground" />
                    </div>
                    <h1 className="text-xl font-bold text-foreground">Re-Validation</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <select className="appearance-none bg-muted/50 border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:outline-none transition-all cursor-pointer">
                            <option>Select Period</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <MoreHorizontal size={20} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Settings size={20} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Schedule Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scheduleData.map((item) => (
                    <div
                        key={item.days}
                        onClick={() => setSelectedDays(item.days)}
                        className={`card relative overflow-hidden transition-all hover:shadow-md cursor-pointer border-2 ${selectedDays === item.days
                            ? 'border-accent bg-accent/5 ring-4 ring-accent/10'
                            : 'border-transparent hover:border-border'
                            }`}
                    >
                        <div className="flex flex-col items-center py-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-black text-foreground">{item.days}</span>
                                <span className="text-lg font-bold text-muted-foreground">{item.label}</span>
                            </div>
                            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div className={`h-full ${selectedDays === item.days ? 'bg-accent' : 'bg-slate-300'} w-1/3`} />
                            </div>
                        </div>
                        {item.days === 180 && (
                            <div className="absolute right-2 bottom-2">
                                <Settings size={14} className="text-muted-foreground/40 rotate-45" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Validation Table */}
            <div className="card !p-0 overflow-hidden border border-border/60">
                <table className="admin-table">
                    <thead className="bg-muted/40">
                        <tr>
                            <th className="w-[40%] text-foreground font-bold py-4">SDS Name</th>
                            <th className="text-foreground font-bold py-4">Last Validated</th>
                            <th className="text-foreground font-bold py-4">Next Due</th>
                            <th className="text-foreground font-bold py-4">Status</th>
                            <th className="w-16">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                        {validationItems.map((item) => (
                            <tr key={item.id} className="hover:bg-muted/30 transition-colors group">
                                <td className="py-4">
                                    <span className="text-sm font-bold text-foreground">{item.name}</span>
                                </td>
                                <td className="py-4 font-mono text-xs font-bold text-muted-foreground">
                                    {item.lastValidated}
                                </td>
                                <td className="py-4 font-mono text-xs font-bold text-muted-foreground">
                                    {item.nextDue}
                                </td>
                                <td className="py-4">
                                    <Badge variant={item.status === 'In-place' ? 'success' : 'secondary'}>
                                        {item.status}
                                    </Badge>
                                </td>
                                <td className="py-4 pr-6">
                                    <button className="p-1.5 rounded shadow-sm hover:bg-accent hover:text-white transition-all text-muted-foreground group/eye" title="View Details">
                                        <Eye size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Action Bar */}
            <div className="flex justify-end mt-4">
                <button className="btn bg-[#545e5a] hover:bg-[#434d49] text-white px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-[#545e5a]/20 transition-all font-bold">
                    <Play size={16} fill="currentColor" />
                    Trigger Re-validation
                </button>
            </div>
        </div>
    );
};
