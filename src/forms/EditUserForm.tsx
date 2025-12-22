import React, { useState, useEffect } from 'react';
import { X, Check, Edit2 } from 'lucide-react';

interface IEditUserFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    userData: any;
}

const EditUserForm: React.FC<IEditUserFormProps> = ({ isOpen, onClose, onSave, userData }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        status: 'active',
        isVerified: true,
        notes: ''
    });

    useEffect(() => {
        if (userData) {
            // Split name if needed or just use name as first name for now if structure differs, 
            // but relying on user's provided structure implying firstName/lastName split.
            // If userData comes from UserTable which has 'name', we might need to split it.
            // For now, I'll assume userData might match or we split 'name' if firstName is missing.
            const nameParts = userData.name ? userData.name.split(' ') : ['', ''];

            setFormData({
                firstName: userData.firstName || nameParts[0] || '',
                lastName: userData.lastName || nameParts.slice(1).join(' ') || '',
                email: userData.email || '',
                phone: userData.phone || '',
                address: userData.address || '',
                city: userData.city || '',
                state: userData.state || '',
                pincode: userData.pincode || '',
                status: userData.status || 'Active',
                isVerified: userData.isVerified || false,
                notes: userData.notes || ''
            });
        }
    }, [userData]);

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...userData, ...formData });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-white shadow-2xl rounded-2xl border border-border/50 animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden text-foreground">

                {/* Header */}
                <div className="px-6 py-4 border-b border-border/10 bg-muted/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                            <Edit2 size={18} />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">Edit User</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-all text-muted-foreground"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Personal Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">First Name <span className="text-destructive">*</span></label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">Last Name <span className="text-destructive">*</span></label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address <span className="text-destructive">*</span></label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number <span className="text-destructive">*</span></label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Address Information</h3>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium mb-1.5">Address</label>
                                <textarea
                                    id="address"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium mb-1.5">City</label>
                                    <input
                                        id="city"
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium mb-1.5">State</label>
                                    <input
                                        id="state"
                                        type="text"
                                        value={formData.state}
                                        onChange={(e) => handleInputChange('state', e.target.value)}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium mb-1.5">Pincode</label>
                                    <input
                                        id="pincode"
                                        type="text"
                                        value={formData.pincode}
                                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Account Settings</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium mb-1.5">Status</label>
                                    <select
                                        id="status"
                                        value={formData.status}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background "
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Blocked">Blocked</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-3 pt-6">
                                    <input
                                        type="checkbox"
                                        id="isVerified"
                                        checked={formData.isVerified}
                                        onChange={(e) => handleInputChange('isVerified', e.target.checked)}
                                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="isVerified" className="text-sm font-medium">Email Verified</label>
                                </div>
                            </div>

                            {/* <div>
                                <label htmlFor="notes" className="block text-sm font-medium mb-1.5">Notes</label>
                                <textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background resize-none"
                                    placeholder="Additional notes about the user..."
                                />
                            </div> */}
                        </div>

                        {/* Actions */}
                        <div className="sticky -bottom-4 bg-white pt-4 border-t border-border flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-sm flex items-center gap-2 transition-colors"
                            >
                                <Check size={16} />
                                Update User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { EditUserForm };
