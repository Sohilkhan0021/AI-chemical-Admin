import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'secondary' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'secondary' }) => {
    const variants = {
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-destructive/10 text-destructive',
        secondary: 'bg-muted text-muted-foreground',
        outline: 'bg-transparent border border-border text-muted-foreground',
    };

    return (
        <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${variants[variant]}`}>
            {children}
        </span>
    );
};
