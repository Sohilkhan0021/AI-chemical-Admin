import React, { useState } from 'react';
import { X, Save, FileText, Calendar, Hash, Factory, Info } from 'lucide-react';

interface AddSDSFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddSDSForm: React.FC<AddSDSFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        productName: '',
        casNumber: '',
        manufacturer: '',
        version: '',
        status: 'Pending',
        issueDate: new Date().toISOString().split('T')[0]
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted SDS Data:', formData);
        // Here you would typically call an API to save the data
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
            <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-border/50 animate-in zoom-in-95 duration-200 flex flex-col overflow-hidden text-foreground">

                {/* Header */}
                <div className="px-6 py-4 border-b border-border/10 bg-muted/5 flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <FileText className="text-accent" size={20} />
                        Add New SDS
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Product Name */}
                        <div className="col-span-1 md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Product Name <span className="text-destructive">*</span>
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    name="productName"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. Sodium Hydroxide Solution"
                                    value={formData.productName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* CAS Number */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                CAS Number <span className="text-destructive">*</span>
                            </label>
                            <div className="relative">
                                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    name="casNumber"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. 1310-73-2"
                                    value={formData.casNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Manufacturer */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Manufacturer <span className="text-destructive">*</span>
                            </label>
                            <div className="relative">
                                <Factory className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    name="manufacturer"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. ChemCorp Industries"
                                    value={formData.manufacturer}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Version */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Version
                            </label>
                            <div className="relative">
                                <Info className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    name="version"
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    placeholder="e.g. v1.0"
                                    value={formData.version}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Status
                            </label>
                            <div className="relative">
                                <select
                                    name="status"
                                    className="w-full pl-4 pr-10 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm appearance-none cursor-pointer"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Pending">Pending Review</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Expired">Expired</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Issue Date */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                                Issue Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="date"
                                    name="issueDate"
                                    className="w-full pl-10 pr-4 py-2.5 bg-muted/20 border border-border/30 rounded-xl outline-none focus:border-accent/50 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all font-medium text-sm"
                                    value={formData.issueDate}
                                    onChange={handleChange}
                                />
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
                            Create SDS Record
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
