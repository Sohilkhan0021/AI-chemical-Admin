import React from 'react';
import { Clock, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface ExportTask {
    id: string;
    name: string;
    format: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    progress?: number;
}

const mockTasks: ExportTask[] = [
    { id: '1', name: 'Annual Safety Report 2025', format: 'PDF', status: 'processing', progress: 65 },
    { id: '2', name: 'Chemical Inventory - Oslo', format: 'Excel', status: 'queued' },
];

export const ExportStatus: React.FC = () => {
    return (
        <div className="space-y-4">
            {mockTasks.length === 0 ? (
                <div className="text-center py-6">
                    <p className="text-sm text-muted-foreground">No active exports at the moment.</p>
                </div>
            ) : (
                mockTasks.map((task) => (
                    <div key={task.id} className="p-4 rounded-xl border border-border bg-muted/10 space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold truncate max-w-[180px]">{task.name}</h4>
                            <span className="text-[10px] font-black bg-muted px-1.5 py-0.5 rounded uppercase">{task.format}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5 capitalize">
                                {/* {task.status === 'processing' && <Loader2 size={14} className="text-accent animate-spin" />} */}
                                {task.status === 'queued' && <Clock size={14} className="text-muted-foreground" />}
                                {task.status === 'completed' && <CheckCircle2 size={14} className="text-success" />}
                                {task.status === 'failed' && <XCircle size={14} className="text-destructive" />}
                                <span className={
                                    task.status === 'processing' ? 'text-accent font-semibold' :
                                        task.status === 'completed' ? 'text-success font-semibold' :
                                            task.status === 'failed' ? 'text-destructive font-semibold' :
                                                'text-muted-foreground'
                                }>
                                    {task.status}
                                </span>
                            </div>
                            {task.progress !== undefined && (
                                <span className="text-muted-foreground font-medium">{task.progress}%</span>
                            )}
                        </div>

                        {task.progress !== undefined && (
                            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent transition-all duration-500 ease-out"
                                    style={{ width: `${task.progress}%` }}
                                />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};
