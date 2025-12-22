import React, { Suspense } from 'react';
import { AuditLogContent } from './AuditLogContent';

const AuditLogPage: React.FC = () => {
    return (
        <div className="p-6">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]">Loading Audit Logs...</div>}>
                <AuditLogContent />
            </Suspense>
        </div>
    );
};

export default AuditLogPage;
