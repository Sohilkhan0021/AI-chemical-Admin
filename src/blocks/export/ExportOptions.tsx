import React, { useState } from 'react';
import { Globe2 } from 'lucide-react';

export const ExportOptions: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'no'>('en');

    return (
        <div className="space-y-8">
            {/* Language Selection */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 mb-1">
                    <Globe2 size={16} className="text-accent" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80">Export Language</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 ${language === 'en'
                                ? 'bg-accent/5 border-accent text-accent shadow-sm'
                                : 'border-border bg-muted/20 text-muted-foreground hover:bg-muted/40'
                            }`}
                    >
                        <span className="text-2xl">🇺🇸</span>
                        <span className="font-semibold">English</span>
                        <span className="text-[10px] opacity-60">Complete Translation</span>
                    </button>
                    <button
                        onClick={() => setLanguage('no')}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 ${language === 'no'
                                ? 'bg-accent/5 border-accent text-accent shadow-sm'
                                : 'border-border bg-muted/20 text-muted-foreground hover:bg-muted/40'
                            }`}
                    >
                        <span className="text-2xl">🇳🇴</span>
                        <span className="font-semibold">Norwegian</span>
                        <span className="text-[10px] opacity-60">Translyted (AI)</span>
                    </button>
                </div>
                {language === 'no' && (
                    <p className="text-[11px] text-accent/80 bg-accent/5 p-2 rounded-lg border border-accent/10 italic">
                        * Norwegian exports utilize AI-assisted translation for technical summaries.
                    </p>
                )}
            </div>

            <div className="h-px bg-border/50" />

            {/* Inclusions Toggles */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80">Safety Content Toggles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <ToggleOption label="Include GHS Pictograms" defaultChecked />
                    <ToggleOption label="Signal Words (Danger/Warning)" defaultChecked />
                    <ToggleOption label="Hazard Statements (H-phrases)" defaultChecked />
                    <ToggleOption label="Precautionary Statements (P-phrases)" defaultChecked />
                </div>
            </div>

            <div className="h-px bg-border/50" />

            {/* Compliance Tracking */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80">Compliance & Audit Trails</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <ToggleOption label="Full Revision History" />
                    <ToggleOption label="Next Re-validation Dates" defaultChecked />
                    <ToggleOption label="Audit Logs (Last 12 months)" />
                    <ToggleOption label="Supplier Contact Info" defaultChecked />
                </div>
            </div>
        </div>
    );
};

const ToggleOption: React.FC<{ label: string; defaultChecked?: boolean }> = ({ label, defaultChecked = false }) => {
    return (
        <label className="flex items-center justify-between group cursor-pointer">
            <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">{label}</span>
            <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
                <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer transition-all peer-checked:bg-accent peer-checked:border-accent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:shadow-sm after:transition-all peer-checked:after:translate-x-full"></div>
            </div>
        </label>
    );
}
