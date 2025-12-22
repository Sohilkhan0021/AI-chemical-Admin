import React, { useState } from 'react';
import { User, Lock, Monitor, ShieldCheck, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';

export const SettingsContent: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    // Form states
    const [adminInfo, setAdminInfo] = useState({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@ai-chem.com'
    });

    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });


    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage({ type: 'success', text: 'Profile updated successfully!' });
        setTimeout(() => setStatusMessage(null), 3000);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            setStatusMessage({ type: 'error', text: 'New passwords do not match!' });
            return;
        }
        if (passwords.new.length < 8) {
            setStatusMessage({ type: 'error', text: 'Password must be at least 8 characters long.' });
            return;
        }
        setStatusMessage({ type: 'success', text: 'Password changed successfully!' });
        setPasswords({ current: '', new: '', confirm: '' });
        setTimeout(() => setStatusMessage(null), 3000);
    };

    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-12">
            <div className="flex justify-between items-start">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-foreground mb-2">General Settings</h1>
                    <p className="text-muted-foreground text-base">Manage your account preferences and security settings.</p>
                </div>
            </div>

            {statusMessage && (
                <div className={`p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${statusMessage.type === 'success' ? 'bg-success/10 text-success border border-success/20' : 'bg-destructive/10 text-destructive border border-destructive/20'
                    }`}>
                    {statusMessage.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm font-medium">{statusMessage.text}</span>
                </div>
            )}

            {/* Admin Basic Info */}
            <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                        <User size={18} className="text-accent" />
                        <h2 className="text-lg font-semibold">Admin Basic Information</h2>
                    </div>
                </div>
                <div className="p-6">
                    <form onSubmit={handleInfoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">First Name</label>
                            <input
                                type="text"
                                value={adminInfo.firstName}
                                onChange={(e) => setAdminInfo({ ...adminInfo, firstName: e.target.value })}
                                placeholder="Admin"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                            <input
                                type="text"
                                value={adminInfo.lastName}
                                onChange={(e) => setAdminInfo({ ...adminInfo, lastName: e.target.value })}
                                placeholder="User"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                            <input
                                type="email"
                                value={adminInfo.email}
                                readOnly
                                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-muted-foreground cursor-not-allowed outline-none"
                            />
                            <p className="text-[11px] text-muted-foreground">Email address cannot be changed for administrative accounts.</p>
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="btn btn-primary px-6">Save Changes</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Change Password */}
            <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                        <Lock size={18} className="text-accent" />
                        <h2 className="text-lg font-semibold">Security & Password</h2>
                    </div>
                </div>
                <div className="p-6">
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Current Password</label>

                            <div className="relative">
                                <input
                                    type={showPassword.current ? 'text' : 'password'}
                                    value={passwords.current}
                                    onChange={(e) =>
                                        setPasswords({ ...passwords, current: e.target.value })
                                    }
                                    placeholder="••••••••"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 pr-10   focus:border-accent outline-none transition-all"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword({ ...showPassword, current: !showPassword.current })
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                >
                                    {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">New Password</label>
                                <input
                                    type="password"
                                    value={passwords.new}
                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                    required
                                />
                            </div> */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    New Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword.new ? 'text' : 'password'}
                                        value={passwords.new}
                                        onChange={(e) =>
                                            setPasswords({ ...passwords, new: e.target.value })
                                        }
                                        placeholder="••••••••"
                                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 pr-10 focus:border-accent outline-none transition-all"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword({ ...showPassword, new: !showPassword.new })
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    >
                                        {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                            {/* 
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Confirm New Password</label>
                                <input
                                    type="password"
                                    value={passwords.confirm}
                                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                    required
                                />
                            </div> */}

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Confirm New Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword.confirm ? 'text' : 'password'}
                                        value={passwords.confirm}
                                        onChange={(e) =>
                                            setPasswords({ ...passwords, confirm: e.target.value })
                                        }
                                        placeholder="••••••••"
                                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 pr-10  focus:border-accent outline-none transition-all"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword({
                                                ...showPassword,
                                                confirm: !showPassword.confirm
                                            })
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    >
                                        {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary px-6">Update Password</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Device Activity */}
            <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                        <Monitor size={18} className="text-accent" />
                        <h2 className="text-lg font-semibold">Device Activity</h2>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-accent/10 rounded-lg">
                                <Monitor size={20} className="text-accent" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium flex items-center gap-2">
                                    Windows Desktop / Chrome
                                    <span className="text-[10px] bg-success/10 text-success px-1.5 py-0.5 rounded-full flex items-center gap-1 font-bold">
                                        <ShieldCheck size={10} /> CURRENT
                                    </span>
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">Last active: Just now • Mumbai, India</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground">Authorized</span>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-4 opacity-70">
                            <div className="p-2 bg-muted rounded-lg">
                                <Monitor size={20} className="text-muted-foreground" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">MacBook Pro / Safari</h4>
                                <p className="text-xs text-muted-foreground mt-0.5">Last active: 2 hours ago • Delhi, India</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground">Authorized</span>
                    </div>
                </div>
            </section>
        </div>
    );
};
