import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface HistoryItem {
    id: string;
    date: string;
    user: string;
    format: string;
    refId: string;
}

const history: HistoryItem[] = [
    { id: '1', date: '2025-12-21 14:20', user: 'Admin User', format: 'PDF', refId: 'EXP-9021-A' },
    { id: '2', date: '2025-12-20 09:15', user: 'Admin User', format: 'Excel', refId: 'EXP-8842-B' },
    { id: '3', date: '2025-12-19 16:45', user: 'System', format: 'Word', refId: 'EXP-7731-C' },
    { id: '4', date: '2025-12-18 11:30', user: 'Admin User', format: 'PDF', refId: 'EXP-6620-D' },
];

export const ExportHistory: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-muted/50 border-b border-border">
                        <th className="px-4 py-3 text-[10px] font-black uppercase tracking-wider text-muted-foreground">Export Date</th>
                        <th className="px-4 py-3 text-[10px] font-black uppercase tracking-wider text-muted-foreground">User / Ref ID</th>
                        <th className="px-4 py-3 text-right"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                    {history.map((item) => (
                        <tr key={item.id} className="hover:bg-muted/20 transition-colors group">
                            <td className="px-4 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">{item.date}</span>
                                    <span className="text-[10px] bg-muted w-fit px-1 rounded font-bold uppercase mt-1">{item.format}</span>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm text-foreground/80">{item.user}</span>
                                    <span className="text-[10px] text-muted-foreground font-mono">{item.refId}</span>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                                <button className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-all text-muted-foreground opacity-0 group-hover:opacity-100">
                                    <Download size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="p-4 border-t border-border">
                <button className="text-xs font-bold text-accent hover:underline flex items-center gap-1 mx-auto">
                    View Full Export Audit Trail <ExternalLink size={12} />
                </button>
            </div>
        </div>
    );
};
