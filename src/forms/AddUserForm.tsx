import React, { useState } from 'react';
import { X, Save, User, Mail, Shield, UserCheck } from 'lucide-react';

interface AddUserFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddUserForm: React.FC<AddUserFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: 'Viewer',
        status: 'Active'
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted User Data:', formData);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl border border-border/50 animate-in zoom-in-95 duration-200 flex flex-col overflow-hidden text-foreground">

                {/* Header */}
                <div className="px-6 py-4 border-b border-border/10 bg-muted/5 flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <User className="text-accent" size={20} />
                        Add New User
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-all text-muted-foreground hover:text-foreground"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto custom-scrollbar">
                    <div className="space-y-5">

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Full Name <span className="text-destructive">*</span>
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Email Address <span className="text-destructive">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. john.doe@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            {/* Role */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                    Role <span className="text-destructive">*</span>
                                </label>
                                <div className="relative">
                                    <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <select
                                        name="role"
                                        className="w-full pl-10 pr-8 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm appearance-none cursor-pointer"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="Safety Officer">Safety Officer</option>
                                        <option value="Reviewer">Reviewer</option>
                                        <option value="Viewer">Viewer</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                    Status
                                </label>
                                <div className="relative">
                                    <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                    <select
                                        name="status"
                                        className="w-full pl-10 pr-8 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm appearance-none cursor-pointer"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-border/10 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 text-xs font-bold bg-accent text-white rounded-xl shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                        >
                            <Save size={16} />
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
