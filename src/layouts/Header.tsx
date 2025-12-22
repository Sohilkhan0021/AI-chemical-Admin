import React from 'react';
import { Search, Bell, ShieldCheck } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from '../auth/useAuthContext';
import ChemAILogo from '../assets/images/logo.png';
import { UserProfileDropdown } from '../dropdown/users/UserProfileDropdown';


export const Header: React.FC = () => {
    const { user } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="h-16 bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-8 sticky top-0 z-[90]">
            <div className="flex-1 max-w-[400px]">
                <div className="flex items-center bg-muted rounded-lg px-4 py-2 gap-3 border border-transparent focus-within:border-accent transition-all">
                    <Search size={18} className="text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by SDS CID, CAS, or Product..."
                        className="bg-transparent border-none outline-none text-sm text-foreground w-full"
                    />
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[13px] font-bold text-success bg-success/10 px-3 py-1.5 rounded-full">
                    <ShieldCheck size={16} />
                    <span>System Compliant</span>
                </div>
                <button className="relative text-outline hover:text-foreground transition-all">
                    <Bell size={20} />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full border-2 border-card"></span>
                </button>
                <div ref={profileRef} className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-4 pl-6 border-l border-border hover:opacity-80 transition-opacity outline-none"
                    >
                        <div className="flex flex-col items-end hidden md:flex">
                            <span className="text-sm font-semibold">
                                {user ? `${user.firstName} ${user.lastName}` : 'Admin User'}
                            </span>
                            <span className="text-[11px] text-muted-foreground capitalize">
                                {user?.role || 'Safety Officer'}
                            </span>
                        </div>
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center">
                            <img
                                src={ChemAILogo}
                                alt="Admin Profile"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </button>

                    {isOpen && <UserProfileDropdown />}
                </div>
            </div>
        </header>
    );
};
