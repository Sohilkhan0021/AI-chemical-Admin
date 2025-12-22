import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const AdminLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col">
                <Header />
                <main className="flex-1 p-8 bg-muted">
                    <Suspense fallback={<div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading compliance data...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    );
};
