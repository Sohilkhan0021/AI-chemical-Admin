import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../auth/useAuthContext';
import ChemAILogo from '../../assets/images/logo.png';

export const UserProfileDropdown: React.FC = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            navigate('/auth/login');
            await logout();
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <div className="absolute top-full right-0 mt-3 w-64 bg-white border border-border rounded-xl shadow-lg p-4 flex flex-col gap-2 z-[100] animate-in fade-in zoom-in-95 duration-200">
            {/* Dropdown Header */}
            <div className="flex items-center gap-3 pb-3 mb-1 border-b border-border">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center shrink-0">
                    <img
                        src={ChemAILogo}
                        alt="Profile"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-semibold truncate">
                        {user ? `${user.firstName} ${user.lastName}` : 'Admin User'}
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                        {user?.email || 'admin@ai-chem.com'}
                    </span>
                </div>
            </div>

            {/* Dropdown Actions */}
            <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full text-sm font-medium text-destructive 
             border border-destructive/30 
             hover:bg-destructive/30 
             px-3 py-2 rounded-lg transition-colors"
            >
                <span>Logout</span>
            </button>

        </div>
    );
};
