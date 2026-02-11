
import React, { useState } from 'react';
import { Lead, LeadStatus } from '../types';

const CRMView: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([
    { id: '1', name: 'Ricardo Amaro', whatsapp: '11988887777', status: 'Lead', interest: 'Invisalign', source: 'Instagram', lastContact: '2023-11-01', nextAction: 'Enviar script qualificação', unit: 'São Paulo' },
    { id: '2', name: 'Ana Beatriz', whatsapp: '11977776666', status: 'Agendado', interest: 'Limpeza', source: 'Indicação', lastContact: '2023-11-05', nextAction: 'Confirmar 24h', unit: 'São Paulo' },
    { id: '3', name: 'Felipe Costa', whatsapp: '11966665555', status: 'Em Tratamento', interest: 'Implante', source: 'WhatsApp', lastContact: '2023-11-02', nextAction: 'Acompanhamento pós-cirúrgico', unit: 'São Paulo' },
  ]);

  const statuses: LeadStatus[] = ['Lead', 'Agendado', 'Em Tratamento', 'Concluído', 'Dormente', 'VIP'];

  const handleWhatsApp = (phone: string, message: string = "Olá 😊 Aqui é da Prime Odontologia 🦷") => {
    const url = `https://wa.me/55${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getDayDiff = (dateStr: string) => {
    const last = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now.getTime() - last.getTime()) / (1000 * 3600 * 24));
    return diff;
  };

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex justify-between items-end px-2">
        <div>
          <h3 className="text-3xl font-black text-slate-800 tracking-tighter">Fluxo de Relacionamento (CRM)</h3>
          <p className="text-sm text-slate-500 font-medium">Controle de pacientes e leads Prime Odontologia.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100 rounded-xl">
             <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
             <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Atraso &gt; 7 Dias</span>
          </div>
          <button className="bg-sky-500 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-sky-100 hover:bg-sky-600 transition-all">
            + Novo Paciente
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
        {statuses.map(status => (
          <div key={status} className="flex-shrink-0 w-80 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-4 py-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${status === 'VIP' ? 'bg-amber-400' : 'bg-sky-400'}`}></span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">{status}</span>
              </div>
              <span className="text-[11px] font-black text-slate-400">
                {leads.filter(l => l.status === status).length}
              </span>
            </div>
            
            <div className="flex-1 space-y-4 bg-slate-100/30 rounded-[2.5rem] p-4 border border-slate-100/50 overflow-y-auto min-h-[500px]">
              {leads.filter(l => l.status === status).map(lead => {
                const daysSinceContact = getDayDiff(lead.lastContact);
                const isCritical = daysSinceContact > 7;

                return (
                  <div key={lead.id} className={`bg-white p-6 rounded-[2rem] shadow-sm border ${isCritical ? 'border-rose-200 ring-2 ring-rose-50' : 'border-slate-100'} hover:border-sky-300 hover:shadow-xl transition-all group relative`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-widest">{lead.source}</span>
                        <span className="text-[9px] font-bold text-slate-400">{lead.unit}</span>
                      </div>
                      <button 
                        onClick={() => handleWhatsApp(lead.whatsapp)}
                        className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </button>
                    </div>
                    
                    <h4 className="text-md font-black text-slate-800 mb-1 group-hover:text-sky-600 transition-colors">{lead.name}</h4>
                    <p className="text-xs font-bold text-sky-500 mb-4">{lead.interest}</p>
                    
                    <div className="pt-4 border-t border-slate-50 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                        <p className="text-[10px] font-black text-slate-700 uppercase tracking-tighter truncate">{lead.nextAction}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-400">Último contato: {new Date(lead.lastContact).toLocaleDateString('pt-BR')}</span>
                        {isCritical && (
                          <span className="text-[9px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">{daysSinceContact}d sem contato</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {leads.filter(l => l.status === status).length === 0 && (
                <div className="h-32 flex flex-col items-center justify-center border-2 border-dashed border-slate-200/50 rounded-3xl opacity-30 gap-2">
                  <span className="text-2xl">📁</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sem Pacientes</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMView;
