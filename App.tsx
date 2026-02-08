
import React, { useState } from 'react';
import { ViewType, Patient, ServiceOrder, OSStatus } from './types';
import { Icons } from './constants';
import Dashboard from './components/Dashboard';
import PatientManagement from './components/PatientManagement';
import AIAssistant from './components/AIAssistant';
import CRMView from './components/CRMView';
import KeyActivitiesView from './components/KeyActivitiesView';
import InfrastructureView from './components/InfrastructureView';
import RevenueView from './components/RevenueView';
import ClinicalRecordsView from './components/ClinicalRecordsView';
import SettingsView from './components/SettingsView';
import ScheduleView from './components/ScheduleView';
import ClientJourneyView from './components/ClientJourneyView';
import MarketingHubView from './components/MarketingHubView';
import SalesPlaybookView from './components/SalesPlaybookView';
import POPSOPSView from './components/POPSOPSView';
import OperationsHubView from './components/OperationsHubView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [patients, setPatients] = useState<Patient[]>([
    { id: '1', name: 'João Silva', cpf: '123.456.789-00', phone: '(11) 98765-4321', email: 'joao@email.com', birthDate: '20 de Maio de 1985', history: 'Sensibilidade.', status: 'Lead' },
    { id: '2', name: 'Maria Oliveira', cpf: '987.654.321-11', phone: '(11) 91234-5678', email: 'maria@email.com', birthDate: '12 de Outubro de 1992', history: 'Canal.', status: 'Em Tratamento' }
  ]);
  const [orders] = useState<ServiceOrder[]>([
    { id: 'OS-001', patientId: '1', dentistId: 'D1', date: '2023-10-25', status: OSStatus.OPEN, description: 'Limpeza', procedures: ['Limpeza'], totalValue: 250 }
  ]);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard patients={patients} orders={orders} />;
      case 'patients': return <PatientManagement patients={patients} setPatients={setPatients} />;
      case 'crm': return <CRMView />;
      case 'schedule': return <ScheduleView />;
      case 'client-journey': return <ClientJourneyView />;
      case 'marketing-hub': return <MarketingHubView />;
      case 'sales-playbook': return <SalesPlaybookView />;
      case 'pops-sops': return <POPSOPSView />;
      case 'operations-hub': return <OperationsHubView />;
      case 'activities': return <KeyActivitiesView />;
      case 'infrastructure': return <InfrastructureView />;
      case 'revenue': return <RevenueView />;
      case 'clinical-records': return <ClinicalRecordsView patients={patients} />;
      case 'settings': return <SettingsView />;
      case 'ai-assistant': return <AIAssistant patients={patients} />;
      default: return <Dashboard patients={patients} orders={orders} />;
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Painel Central', icon: <Icons.Dashboard /> },
    { id: 'schedule', label: 'Agenda (Google)', icon: <Icons.Schedule /> },
    { id: 'marketing-hub', label: 'Marketing Hub', icon: <Icons.Channels /> },
    { id: 'operations-hub', label: 'Workflow', icon: <Icons.Activities /> },
    { id: 'sales-playbook', label: 'Vendas', icon: <Icons.ContentHub /> },
    { id: 'crm', label: 'CRM', icon: <Icons.CRM /> },
    { id: 'client-journey', label: 'Jornada', icon: <Icons.Journey /> },
    { id: 'revenue', label: 'Financeiro', icon: <Icons.Revenue /> },
    { id: 'patients', label: 'Pacientes', icon: <Icons.Patients /> },
    { id: 'clinical-records', label: 'Prontuários', icon: <Icons.ClinicalRecords /> },
    { id: 'ai-assistant', label: 'Assistente IA', icon: <Icons.AI /> },
    { id: 'settings', label: 'Ajustes', icon: <Icons.Settings /> },
  ];

  return (
    <div className="flex h-screen w-full p-4 lg:p-6 gap-6 relative overflow-hidden">
      {/* Floating Glass Sidebar */}
      <aside className="w-20 lg:w-64 h-full glass rounded-[2.5rem] shadow-2xl flex flex-col items-center lg:items-stretch py-8 z-20">
        <div className="px-4 lg:px-8 mb-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-sky-500/30">P</div>
          <div className="hidden lg:block">
            <h1 className="font-black text-slate-800 text-lg tracking-tighter leading-none">Prime</h1>
            <p className="text-[9px] text-sky-500 font-black uppercase tracking-widest">Intelligence</p>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setCurrentView(item.id as ViewType)}
              className={`w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                currentView === item.id 
                  ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/20' 
                  : 'text-slate-500 hover:bg-white/50 hover:text-slate-800'
              }`}
              title={item.label}
            >
              <span className={`transition-transform duration-300 ${currentView === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className="hidden lg:block font-bold text-[13px] tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 mt-6">
          <button 
            onClick={() => setCurrentView('settings')}
            className="w-full flex items-center justify-center lg:justify-start gap-4 p-3 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors border border-white/40"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-white/50 flex items-center justify-center text-[10px] font-black">AD</div>
            <div className="hidden lg:block text-left">
              <p className="text-[11px] font-black text-slate-800 truncate">Admin Prime</p>
              <p className="text-[8px] text-slate-400 font-black uppercase">v3.5</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full flex flex-col min-w-0 z-10">
        <header className="h-20 glass rounded-[2rem] shadow-xl flex items-center justify-between px-8 mb-6 border border-white/40">
          <div className="flex flex-col">
            <h2 className="text-xl lg:text-2xl font-black text-slate-800 tracking-tighter leading-none">
              {menuItems.find(i => i.id === currentView)?.label || 'Omni Dashboard'}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Operational Node: Master-01</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
               <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Global Sync Active</span>
               <span className="text-xs font-bold text-slate-600">{new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="h-10 w-px bg-slate-200/50"></div>
            <button className="relative w-10 h-10 rounded-2xl bg-white/50 hover:bg-white transition-all flex items-center justify-center text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
          <div className="animate-in fade-in zoom-in duration-500">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
