import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Building2,
  Users,
  ShieldCheck,
  // Download,
  Settings,
  ShieldAlert,
  FileDown
} from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
  { icon: <FileText size={20} />, label: 'SDS Registry', path: '/registry' },
  { icon: <ClipboardCheck size={20} />, label: 'Manual Review', path: '/review-queue' },
  { icon: <Building2 size={20} />, label: 'Organizations', path: '/organizations' },
  { icon: <Users size={20} />, label: 'User & Roles', path: '/users' },
  { icon: <ShieldCheck size={20} />, label: 'Audit Logs', path: '/audit-logs' },
  { icon: <FileDown size={20} />, label: 'Export Center', path: '/export' },
  { icon: <ClipboardCheck size={20} />, label: 'Re-Validation', path: '/re-validation' },
  { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-border/50 flex flex-col z-50">
      <div className="p-8 border-b border-border/10 flex items-center gap-3 group">
        <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20 ">
          <ShieldAlert size={22} className=" transition-transform" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg  tracking-tighter text-white leading-none">AI-CHEMICAL</span>
          <span className="text-[10px] font-black tracking-[0.2em] text-accent uppercase">Admin</span>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                ? 'bg-accent text-white shadow-lg shadow-accent/20 font-bold scale-[1.02]'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground font-medium'
              }`
            }
          >
            <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <span className="text-sm tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
