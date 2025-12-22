import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    FileText,
    AlertTriangle,
    FlaskConical,
    Flame,
    Droplets,
    Shield,
    Truck,
    BookOpen,
    Download,
    History,
    Edit3,
    CheckCircle,
    XCircle,
    Clock,
    User
} from 'lucide-react';
import { Badge } from '../components/Badge';

export default function SDSDetailsPage() {
    const { sdsId } = useParams();
    const navigate = useNavigate();

    // Mock Data based on requirements
    const sdsData = {
        basicInfo: {
            productId: 'SDS-9921',
            productName: 'Acetone Technical Grade',
            casNumber: '67-64-1',
            version: 'V2.4',
            manufacturer: 'ChemCorp Industrial',
            status: 'Approved',
            lastUpdated: '2024-12-10',
            createdDate: '2024-01-15',
        },
        chemicalId: {
            chemicalName: '2-Propanone',
            synonyms: 'Dimethyl ketone, β-Ketopropane',
            molecularFormula: 'C3H6O',
            molecularWeight: '58.08 g/mol',
            category: 'Solvent',
        },
        hazardId: {
            ghsClassification: 'Flammable Liquid Category 2, Eye Irritation Category 2A',
            hazardStatements: ['H225: Highly flammable liquid and vapor', 'H319: Causes serious eye irritation'],
            precautionaryStatements: ['P210: Keep away from heat/sparks/open flames', 'P305+P351+P338: IF IN EYES: Rinse cautiously...'],
            signalWord: 'Danger',
            pictograms: ['flame', 'exclamation'], // Mock representation
        },
        composition: [
            { name: 'Acetone', cas: '67-64-1', concentration: '> 99.5%', impurities: 'Water < 0.3%' },
        ],
        firstAid: {
            eye: 'Rinse immediately with plenty of water, also under the eyelids, for at least 15 minutes.',
            skin: 'Wash off immediately with soap and plenty of water removing all contaminated clothes and shoes.',
            inhalation: 'Move to fresh air. If breathing is difficult, give oxygen.',
            ingestion: 'Do not induce vomiting. Clean mouth with water and afterwards drink plenty of water.',
            symptoms: 'Irritating to eyes and skin. Vapours may cause drowsiness and dizziness.',
        },
        fireFighting: {
            suitableMedia: 'Alcohol-resistant foam. Carbon dioxide (CO2). Dry chemical.',
            unsuitableMedia: 'High volume water jet.',
            specificHazards: 'Highly flammable. Vapours may form explosive mixtures with air.',
            protectiveEquipment: 'Wear self-contained breathing apparatus and protective suit.',
        },
        accidentalRelease: {
            personalPrecautions: 'Use personal protective equipment. Ensure adequate ventilation. Remove all sources of ignition.',
            environmentalPrecautions: 'Prevent further leakage or spillage if safe to do so. Do not flush into surface water or sanitary sewer system.',
            cleanupMethods: 'Soak up with inert absorbent material. Keep in suitable, closed containers for disposal.',
        },
        handlingStorage: {
            handling: 'Wear personal protective equipment. Avoid contact with skin, eyes and clothing. Keep away from heat and sources of ignition.',
            storage: 'Keep containers tightly closed in a dry, cool and well-ventilated place. Keep away from heat and sources of ignition.',
            incompatible: 'Strong oxidizing agents. Strong reducing agents. Bases.',
        },
        exposureControls: {
            limits: 'TWA: 500 ppm, STEL: 750 ppm (ACGIH)',
            engineeringControls: 'Ensure adequate ventilation, especially in confined areas. Explosion-proof equipment.',
            ppe: {
                gloves: 'Butyl rubber gloves',
                goggles: 'Tightly fitting safety goggles',
                respirator: 'In case of insufficient ventilation wear suitable respiratory equipment (Filter AX)',
                clothing: 'Long sleeved clothing. Antistatic boots.',
            },
        },
        physicalProperties: {
            appearance: 'Colorless liquid',
            odor: 'Sweet, pungent, mint-like',
            ph: '7 (neutral)',
            meltingPoint: '-95 °C',
            boilingPoint: '56 °C',
            flashPoint: '-20 °C (Closed Cup)',
            solubility: 'Soluble in water',
            density: '0.79 g/cm³ at 20 °C',
        },
        stabilityReactivity: {
            stability: 'Stable under normal conditions.',
            conditionsAvoid: 'Heat, flames and sparks. Incompatible products.',
            hazardousReactions: 'None under normal processing.',
            incompatibleSubstances: 'Strong oxidizing agents, Acids, Bases.',
        },
        toxicological: {
            routes: 'Inhalation, Ingestion, Skin contact, Eye contact',
            acuteToxicity: 'LD50 Oral - Rat - 5800 mg/kg',
            chronicEffects: 'May cause damage to organs through prolonged or repeated exposure.',
            carcinogenicity: 'Not listed as a carcinogen by IARC, NTP, or OSHA.',
        },
        ecological: {
            impact: 'This product has no known eco-toxicological effects.',
            toxicity: 'LC50 - Oncorhynchus mykiss (rainbow trout) - 5540 mg/l - 96 h',
            persistence: 'Readily biodegradable.',
        },
        disposal: {
            methods: 'Dispose of in accordance with local regulations.',
            wasteTreatment: 'Burn in a chemical incinerator equipped with an afterburner and scrubber but exert extra care in igniting as this material is highly flammable.',
        },
        transport: {
            unNumber: 'UN1090',
            hazardClass: '3',
            packingGroup: 'II',
            info: 'Flammable Liquid',
        },
        regulatory: {
            regulations: 'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
            compliance: 'Compliant',
        },
        actions: {
            auditLog: [
                { action: 'Approved', user: 'Jane Doe', date: '2024-12-10 14:30' },
                { action: 'Updated v2.3 to v2.4', user: 'John Smith', date: '2024-12-09 09:15' }
            ]
        }
    };

    const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
        <div className="flex items-center gap-2 mb-4 text-primary border-b border-border/50 pb-2">
            <div className="p-1.5 bg-primary/10 rounded-lg">
                <Icon size={18} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">{title}</h2>
        </div>
    );

    const InfoRow = ({ label, value, fullWidth = false }: { label: string, value: React.ReactNode, fullWidth?: boolean }) => (
        <div className={`${fullWidth ? 'col-span-full' : ''} flex flex-col gap-1`}>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{label}</span>
            <div className="text-sm font-medium text-foreground">{value || '-'}</div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto pb-20 space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/registry')}
                        className="p-2 hover:bg-black/5 rounded-full transition-colors"
                    >
                        <ArrowLeft size={24} className="text-muted-foreground" />
                    </button>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-3xl font-black tracking-tight text-foreground">{sdsData.basicInfo.productName}</h1>
                            <Badge variant="success">{sdsData.basicInfo.status}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5"><FileText size={14} /> {sdsData.basicInfo.productId}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span>v{sdsData.basicInfo.version}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span>Last Updated: {sdsData.basicInfo.lastUpdated}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl font-bold text-sm hover:bg-muted/30 transition-all shadow-sm">
                        <History size={16} className="text-muted-foreground" /> History
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <Download size={16} /> Download PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Main Content Column */}
                <div className="xl:col-span-8 space-y-8">

                    {/* 1. Basic & 2. Chemical ID */}
                    <div className="card p-6 space-y-8">
                        <div>
                            <SectionHeader icon={FlaskConical} title="1. Basic & 2. Chemical Identification" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                <InfoRow label="Product ID" value={sdsData.basicInfo.productId} />
                                <InfoRow label="Product Name" value={sdsData.basicInfo.productName} />
                                <InfoRow label="CAS Number" value={<span className="font-mono bg-muted/30 px-2 py-0.5 rounded text-xs">{sdsData.basicInfo.casNumber}</span>} />
                                <InfoRow label="Version" value={sdsData.basicInfo.version} />
                                <InfoRow label="Manufacturer" value={sdsData.basicInfo.manufacturer} />
                                <InfoRow label="Created Date" value={sdsData.basicInfo.createdDate} />

                                <div className="col-span-full h-px bg-border/40 my-2" />

                                <InfoRow label="Chemical Name" value={sdsData.chemicalId.chemicalName} />
                                <InfoRow label="Synonyms" value={sdsData.chemicalId.synonyms} />
                                <InfoRow label="Molecular Formula" value={sdsData.chemicalId.molecularFormula} />
                                <InfoRow label="Molecular Weight" value={sdsData.chemicalId.molecularWeight} />
                                <InfoRow label="Category" value={sdsData.chemicalId.category} />
                            </div>
                        </div>
                    </div>

                    {/* 3. Hazard ID */}
                    <div className="card p-6">
                        <SectionHeader icon={AlertTriangle} title="3. Hazard Identification" />
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                                <div className="shrink-0">
                                    <AlertTriangle className="text-destructive" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-destructive mb-1">Signal Word: {sdsData.hazardId.signalWord}</h4>
                                    <p className="text-sm font-medium">{sdsData.hazardId.ghsClassification}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="text-xs font-bold text-muted-foreground uppercase mb-3">Hazard Statements</h5>
                                    <ul className="space-y-2">
                                        {sdsData.hazardId.hazardStatements.map((stmt, i) => (
                                            <li key={i} className="text-sm flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                                                {stmt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-muted-foreground uppercase mb-3">Precautionary Statements</h5>
                                    <ul className="space-y-2">
                                        {sdsData.hazardId.precautionaryStatements.map((stmt, i) => (
                                            <li key={i} className="text-sm flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
                                                {stmt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Composition */}
                    <div className="card p-6">
                        <SectionHeader icon={Droplets} title="4. Composition / Ingredients" />
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/30 text-xs uppercase text-muted-foreground font-bold">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">Ingredient Name</th>
                                        <th className="px-4 py-3">CAS Number</th>
                                        <th className="px-4 py-3">Concentration</th>
                                        <th className="px-4 py-3 rounded-r-lg">Impurities</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/30">
                                    {sdsData.composition.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className="px-4 py-3 font-medium">{item.name}</td>
                                            <td className="px-4 py-3 font-mono text-xs">{item.cas}</td>
                                            <td className="px-4 py-3">{item.concentration}</td>
                                            <td className="px-4 py-3 text-muted-foreground">{item.impurities}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 5. First Aid & 6. Fire Fighting */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card p-6">
                            <SectionHeader icon={Shield} title="5. First Aid Measures" />
                            <div className="space-y-4">
                                <InfoRow label="Eye Contact" value={sdsData.firstAid.eye} />
                                <InfoRow label="Skin Contact" value={sdsData.firstAid.skin} />
                                <InfoRow label="Inhalation" value={sdsData.firstAid.inhalation} />
                                <InfoRow label="Ingestion" value={sdsData.firstAid.ingestion} />
                                <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                                    <InfoRow label="Important Symptoms" value={sdsData.firstAid.symptoms} />
                                </div>
                            </div>
                        </div>

                        <div className="card p-6">
                            <SectionHeader icon={Flame} title="6. Fire-Fighting Measures" />
                            <div className="space-y-4">
                                <InfoRow label="Suitable Extinguishing Media" value={sdsData.fireFighting.suitableMedia} />
                                <InfoRow label="Unsuitable Media" value={sdsData.fireFighting.unsuitableMedia} />
                                <InfoRow label="Specific Hazards" value={sdsData.fireFighting.specificHazards} />
                                <InfoRow label="Protective Equipment" value={sdsData.fireFighting.protectiveEquipment} />
                            </div>
                        </div>
                    </div>

                    {/* 7, 8, 9 - Safety Measures Group */}
                    <div className="card p-6 space-y-8">
                        <div>
                            <SectionHeader icon={Shield} title="7. Accidental Release Measures" />
                            <div className="grid grid-cols-1 gap-4">
                                <InfoRow label="Personal Precautions" value={sdsData.accidentalRelease.personalPrecautions} fullWidth />
                                <InfoRow label="Environmental Precautions" value={sdsData.accidentalRelease.environmentalPrecautions} fullWidth />
                                <InfoRow label="Cleanup Methods" value={sdsData.accidentalRelease.cleanupMethods} fullWidth />
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />

                        <div>
                            <SectionHeader icon={Box} title="8. Handling & Storage" />
                            <div className="grid grid-cols-1 gap-4">
                                <InfoRow label="Safe Handling" value={sdsData.handlingStorage.handling} fullWidth />
                                <InfoRow label="Storage Conditions" value={sdsData.handlingStorage.storage} fullWidth />
                                <InfoRow label="Incompatible Materials" value={sdsData.handlingStorage.incompatible} fullWidth />
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />

                        <div>
                            <SectionHeader icon={Glasses} title="9. Exposure Controls / PPE" />
                            <div className="space-y-4">
                                <InfoRow label="Exposure Limits" value={sdsData.exposureControls.limits} fullWidth />
                                <InfoRow label="Engineering Controls" value={sdsData.exposureControls.engineeringControls} fullWidth />

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="p-3 bg-muted/10 rounded-lg">
                                        <InfoRow label="Gloves" value={sdsData.exposureControls.ppe.gloves} />
                                    </div>
                                    <div className="p-3 bg-muted/10 rounded-lg">
                                        <InfoRow label="Goggles" value={sdsData.exposureControls.ppe.goggles} />
                                    </div>
                                    <div className="p-3 bg-muted/10 rounded-lg">
                                        <InfoRow label="Respirator" value={sdsData.exposureControls.ppe.respirator} />
                                    </div>
                                    <div className="p-3 bg-muted/10 rounded-lg">
                                        <InfoRow label="clothing" value={sdsData.exposureControls.ppe.clothing} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 10. Physical Properties */}
                    <div className="card p-6">
                        <SectionHeader icon={FlaskConical} title="10. Physical & Chemical Properties" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <InfoRow label="Appearance" value={sdsData.physicalProperties.appearance} />
                            <InfoRow label="Odor" value={sdsData.physicalProperties.odor} />
                            <InfoRow label="pH" value={sdsData.physicalProperties.ph} />
                            <InfoRow label="Density" value={sdsData.physicalProperties.density} />
                            <InfoRow label="Melting Point" value={sdsData.physicalProperties.meltingPoint} />
                            <InfoRow label="Boiling Point" value={sdsData.physicalProperties.boilingPoint} />
                            <InfoRow label="Flash Point" value={sdsData.physicalProperties.flashPoint} />
                            <InfoRow label="Solubility" value={sdsData.physicalProperties.solubility} />
                        </div>
                    </div>

                    {/* 11, 12, 13, 14, 15, 16 - Technical Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card p-6 space-y-6">
                            <SectionHeader icon={Shield} title="11. Stability & Reactivity" />
                            <InfoRow label="Chemical Stability" value={sdsData.stabilityReactivity.stability} />
                            <InfoRow label="Conditions to Avoid" value={sdsData.stabilityReactivity.conditionsAvoid} />
                            <InfoRow label="Incompatible Substances" value={sdsData.stabilityReactivity.incompatibleSubstances} />
                        </div>

                        <div className="card p-6 space-y-6">
                            <SectionHeader icon={AlertTriangle} title="12. Toxicological Information" />
                            <InfoRow label="Routes of Exposure" value={sdsData.toxicological.routes} />
                            <InfoRow label="Acute Toxicity" value={sdsData.toxicological.acuteToxicity} />
                            <InfoRow label="Chronic Effects" value={sdsData.toxicological.chronicEffects} />
                        </div>

                        <div className="card p-6 space-y-6">
                            <SectionHeader icon={BookOpen} title="13. Ecological Information" />
                            <InfoRow label="Toxicity" value={sdsData.ecological.toxicity} />
                            <InfoRow label="Persistence" value={sdsData.ecological.persistence} />
                        </div>

                        <div className="card p-6 space-y-6">
                            <SectionHeader icon={Truck} title="15. Transport Information" />
                            <div className="flex gap-4 items-center">
                                <div className="px-3 py-2 bg-foreground text-background font-mono font-bold rounded">
                                    {sdsData.transport.unNumber}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase">Class {sdsData.transport.hazardClass}</div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase">Pack Group {sdsData.transport.packingGroup}</div>
                                </div>
                            </div>
                            <InfoRow label="Transport Info" value={sdsData.transport.info} />
                        </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="xl:col-span-4 space-y-8">
                    {/* 17. Actions & Logs */}
                    <div className="card p-6 sticky top-6">
                        <SectionHeader icon={FileText} title="17. Actions & Logs" />

                        <div className="flex flex-col gap-3 mb-8">
                            <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                <Edit3 size={18} /> Edit SDS
                            </button>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="py-2.5 bg-success/10 text-success font-bold rounded-xl hover:bg-success/20 transition-all flex items-center justify-center gap-2">
                                    <CheckCircle size={18} /> Approve
                                </button>
                                <button className="py-2.5 bg-destructive/10 text-destructive font-bold rounded-xl hover:bg-destructive/20 transition-all flex items-center justify-center gap-2">
                                    <XCircle size={18} /> Reject
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border/50 pb-2">Audit Log</h4>
                            <div className="space-y-4 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border/50">
                                {sdsData.actions.auditLog.map((log, i) => (
                                    <div key={i} className="pl-6 relative">
                                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-white shadow-sm ring-1 ring-border" />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-sm font-bold text-foreground">{log.action}</span>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1"><User size={10} /> {log.user}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1"><Clock size={10} /> {log.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card p-6">
                        <SectionHeader icon={BookOpen} title="14. Disposal" />
                        <div className="space-y-4">
                            <InfoRow label="Methods" value={sdsData.disposal.methods} />
                            <InfoRow label="Waste Treatment" value={sdsData.disposal.wasteTreatment} />
                        </div>
                    </div>

                    <div className="card p-6">
                        <SectionHeader icon={Shield} title="16. Regulatory" />
                        <div className="space-y-4">
                            <InfoRow label="Status" value={<Badge variant="success">{sdsData.regulatory.compliance}</Badge>} />
                            <InfoRow label="Regulations" value={sdsData.regulatory.regulations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper components for icons that weren't imported but used in sections
function Box({ size, className }: { size?: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22v-9" /></svg>
    )
}

function Glasses({ size, className }: { size?: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="6" cy="15" r="4" /><circle cx="18" cy="15" r="4" /><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" /><path d="M21.5 13 19 7c-.7-1.3-1.4-2-3-2" /></svg>
    )
}
