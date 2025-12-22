import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Building2, Shield, Clock, Lock, ArrowLeft, CheckCircle2, XCircle, FileText, User } from 'lucide-react';
import { Badge } from '../components/Badge';

export default function UserDetailsPage() {
    const { userId } = useParams();
    const navigate = useNavigate();

    const user = {
        id: userId || 'USR-001',
        basicInfo: {
            name: 'Core techies',
            email: 'coretheis@gmail.com',
            phone: '+91 98765 43210',
            publicId: 'USR-001',
            role: 'Admin',
            status: 'Active',
            avatar: 'https://ui-avatars.com/api/?name=Core+techies&background=0D8ABC&color=fff'
        },
        organization: {
            name: 'Acme Corp',
            projects: ['Safety Update 2024', 'Lab Audit'],
            department: 'EHS Management',
            permissions: ['View All', 'Edit SDS', 'Review Reports', 'Export Data']
        },
        loginActivity: {
            lastLogin: '2024-12-20 09:45 AM',
            accountCreated: '2024-01-15',
            lastUpdated: '2024-11-05',
            verificationStatus: 'Verified'
        },
        compliance: {
            assignedRole: 'Safety Officer',
            sdsSummary: 'Reviewed 45 SDS this month',
            lastActionDate: '2024-12-19 02:30 PM'
        },
        security: {
            twoFactor: 'Enabled',
            passwordLastUpdated: '2024-10-10',
            accountLocked: 'No'
        }
    };

    const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
        <div className="flex items-center gap-2 mb-6 pb-2 border-b border-border">
            <Icon size={18} className="text-muted-foreground" />
            <h3 className="font-semibold text-lg text-primary">{title}</h3>
        </div>
    );

    const InfoItem = ({ label, value, className = '' }: { label: string, value: React.ReactNode, className?: string }) => (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">{label}</span>
            <div className="text-sm font-medium text-foreground">
                {value}
            </div>
        </div>
    );

    return (
        <div className="space-y-6 max-w-5xl mx-auto pb-10">
            {/* Header / Back Button */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/users')}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                    <ArrowLeft size={20} className="text-muted-foreground" />
                </button>
                <h1 className="text-2xl font-bold text-foreground">User Details</h1>
            </div>

            {/* 1. Basic Information */}
            <div className="card p-6">
                <SectionHeader icon={User} title="Basic Information" />
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <img
                        src={user.basicInfo.avatar}
                        alt={user.basicInfo.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
                    />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                        <InfoItem
                            label="Full Name"
                            value={user.basicInfo.name}
                        />
                        <InfoItem
                            label="Email Address"
                            value={user.basicInfo.email}
                        />
                        <InfoItem
                            label="Phone Number"
                            value={user.basicInfo.phone}
                        />
                        <InfoItem
                            label="User ID"
                            value={<span className="font-mono text-xs text-muted-foreground">{user.basicInfo.publicId}</span>}
                        />
                        <InfoItem
                            label="Role"
                            value={
                                <div className="flex items-center gap-1.5">
                                    <Shield size={14} className="text-primary" />
                                    {user.basicInfo.role}
                                </div>
                            }
                        />
                        <InfoItem
                            label="Account Status"
                            value={
                                <Badge variant={user.basicInfo.status === 'Active' ? 'success' : 'error'}>
                                    {user.basicInfo.status}
                                </Badge>
                            }
                        />
                    </div>
                </div>
            </div>

            {/* 2. Organization & Access Details */}
            <div className="card p-6">
                <SectionHeader icon={Building2} title="Organization & Access Details" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InfoItem label="Organization Name" value={user.organization.name} />
                    <InfoItem label="Department / Team" value={user.organization.department} />
                    <InfoItem label="Assigned Projects" value={
                        <div className="flex flex-wrap gap-1">
                            {user.organization.projects.map(p => (
                                <span key={p} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md">{p}</span>
                            ))}
                        </div>
                    } />
                    <InfoItem label="Permissions" value={
                        <div className="flex flex-wrap gap-1">
                            {user.organization.permissions.map(p => (
                                <span key={p} className="px-2 py-0.5 border border-border text-xs rounded-md text-muted-foreground">{p}</span>
                            ))}
                        </div>
                    } />
                </div>
            </div>

            {/* 3. Login & Activity Information */}
            <div className="card p-6">
                <SectionHeader icon={Clock} title="Login & Activity Information" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InfoItem label="Last Login" value={user.loginActivity.lastLogin} />
                    <InfoItem label="Account Created" value={user.loginActivity.accountCreated} />
                    <InfoItem label="Last Updated" value={user.loginActivity.lastUpdated} />
                    <InfoItem label="Verification Status" value={
                        <div className="flex items-center gap-1.5 text-success">
                            <CheckCircle2 size={16} />
                            <span>{user.loginActivity.verificationStatus}</span>
                        </div>
                    } />
                </div>
            </div>

            {/* 4. Compliance & Responsibility Information */}
            <div className="card p-6">
                <SectionHeader icon={FileText} title="Compliance & Responsibility Information" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoItem label="Assigned Compliance Role" value={user.compliance.assignedRole} />
                    <InfoItem label="SDS Activity Summary" value={user.compliance.sdsSummary} />
                    <InfoItem label="Last SDS Action Date" value={user.compliance.lastActionDate} />
                </div>
            </div>

            {/* 5. Security Information */}
            <div className="card p-6">
                <SectionHeader icon={Lock} title="Security Information" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoItem label="Two-Factor Authentication" value={
                        <Badge variant={user.security.twoFactor === 'Enabled' ? 'success' : 'warning'}>
                            {user.security.twoFactor}
                        </Badge>
                    } />
                    <InfoItem label="Password Last Updated" value={user.security.passwordLastUpdated} />
                    <InfoItem label="Account Lock Status" value={
                        user.security.accountLocked === 'Yes'
                            ? <span className="text-destructive font-bold flex items-center gap-1"><XCircle size={16} /> Locked</span>
                            : <span className="text-success font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Unlocked</span>
                    } />
                </div>
            </div>
        </div>
    );
}
