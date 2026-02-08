
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
import ContentHub from './components/ContentHub';
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
    { id: 'operations-hub', label: 'Atividades & Workflow', icon: <Icons.Activities /> },
    { id: 'sales-playbook', label: 'Manual de Vendas', icon: <Icons.ContentHub /> },
    { id: 'pops-sops', label: 'POPs & SOPs', icon: <Icons.Settings /> },
    { id: 'crm', label: 'Relacionamento (CRM)', icon: <Icons.CRM /> },
    { id: 'client-journey', label: 'Jornada Cliente', icon: <Icons.Journey /> },
    { id: 'revenue', label: 'Receitas & Catálogo', icon: <Icons.Revenue /> },
    { id: 'patients', label: 'Pacientes', icon: <Icons.Patients /> },
    { id: 'clinical-records', label: 'Prontuários & Docs', icon: <Icons.ClinicalRecords /> },
    { id: 'infrastructure', label: 'Infraestrutura', icon: <Icons.Infrastructure /> },
    { id: 'ai-assistant', label: 'Assistente IA', icon: <Icons.AI /> },
    { id: 'settings', label: 'Configurações', icon: <Icons.Settings /> },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-8 border-b border-slate-100 bg-gradient-to-r from-sky-500/5 to-transparent">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center p-1 shadow-2xl shadow-sky-100 border border-slate-50 relative group overflow-hidden">
              <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="text-sky-500 font-black text-3xl relative z-10">P</div>
            </div>
            <div>
              <h1 className="font-black text-slate-800 text-xl leading-tight tracking-tighter">Prime</h1>
              <p className="text-[10px] text-sky-500 font-black tracking-[0.2em] uppercase">Business OS</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setCurrentView(item.id as ViewType)}
              className={`w-full flex items-center gap-3.5 px-5 py-3 rounded-2xl transition-all duration-300 group ${
                currentView === item.id 
                  ? 'bg-sky-500 text-white shadow-xl shadow-sky-100 translate-x-1' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <span className={`transition-transform duration-300 ${currentView === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className="font-bold text-[13px] tracking-tight whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm cursor-pointer hover:border-sky-200 transition-colors">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-500 border border-slate-200">AD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-slate-800 truncate tracking-tight">Admin Prime</p>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">primeodontologia.com.br</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 z-10 sticky top-0">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-slate-800 tracking-tighter leading-none">
              {menuItems.find(i => i.id === currentView)?.label}
            </h2>
            <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest mt-1">Prime Franchise Intelligence v3.5</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
               <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Unidade Master</span>
               <span className="text-xs font-bold text-slate-600">{new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <button className="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
