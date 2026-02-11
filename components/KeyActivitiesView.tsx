
import React, { useState } from 'react';
import { Activity } from '../types';

const KeyActivitiesView: React.FC = () => {
  const [activities] = useState<Activity[]>([
    { id: '1', title: 'Esterilização Autoclave 1 (Padrão HQ)', category: 'Clínica', priority: 'Alta', dueDate: '2023-11-04', completed: false },
    { id: '2', title: 'Revisão de Scripts Venda (Semanal)', category: 'Administrativa', priority: 'Alta', dueDate: '2023-11-05', completed: true },
    { id: '3', title: 'Upload de KPIs Mensais para Matriz', category: 'Administrativa', priority: 'Alta', dueDate: '2023-11-30', completed: false },
    { id: '4', title: 'Auditoria Local de Marca', category: 'Marketing', priority: 'Média', dueDate: '2023-11-10', completed: false },
  ]);

  const getPriorityColor = (p: string) => {
    switch(p) {
      case 'Alta': return 'text-rose-600 bg-rose-50';
      case 'Média': return 'text-amber-600 bg-amber-50';
      default: return 'text-sky-600 bg-sky-50';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">Checklist de Conformidade</h3>
              <p className="text-sm text-slate-400 font-medium">Atividades Chave conforme manuais da franquia.</p>
            </div>
            <button className="p-4 bg-sky-500 text-white rounded-2xl shadow-lg shadow-sky-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
          </div>

          <div className="space-y-4">
            {activities.map(act => (
              <div key={act.id} className={`flex items-center gap-6 p-6 rounded-[2rem] border transition-all duration-300 ${act.completed ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-md'}`}>
                <button className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${act.completed ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100' : 'border-slate-300 text-transparent'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </button>
                <div className="flex-1">
                  <h4 className={`text-sm font-black ${act.completed ? 'text-slate-400 line-through' : 'text-slate-800'} mb-1`}>{act.title}</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{act.category}</span>
                    <span className="text-[10px] text-slate-300">•</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Limite: {new Date(act.dueDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${getPriorityColor(act.priority)}`}>
                  {act.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
          <h4 className="text-xl font-black mb-6 tracking-tight">Auditoria HQ</h4>
          <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium">Controles centralizados para manutenção dos padrões Prime.</p>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Padrões Visuais</span>
              <span className="text-emerald-400 font-black">OK</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Scripts WhatsApp</span>
              <span className="text-emerald-400 font-black">OK</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">Política de Preços</span>
              <span className="text-amber-400 font-black">REVISAR</span>
            </div>
          </div>
        </div>
        
        <div className="bg-sky-50 p-8 rounded-[2.5rem] border border-sky-100">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-sky-100">❗</div>
              <h4 className="text-sm font-black text-sky-800 uppercase tracking-tight">Regras Franquia</h4>
           </div>
           <ul className="space-y-3 text-xs font-medium text-sky-700 list-disc pl-5 leading-relaxed">
             <li>Jamais envie preços sem avaliação prévia.</li>
             <li>Cada lead ignorado impacta no bônus mensal.</li>
             <li>Proibido o uso de scripts não aprovados.</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyActivitiesView;
