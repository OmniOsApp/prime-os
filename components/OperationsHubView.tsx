
import React, { useState } from 'react';

const OperationsHubView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'routine' | 'logic' | 'activities' | 'tech'>('routine');

  const routines = {
    daily: [
      "Responder leads em até 5 minutos",
      "Confirmar agendamentos do dia seguinte",
      "Follow-up de orçamentos pendentes"
    ],
    weekly: [
      "Revisar no-shows da semana",
      "Analisar vendas por tipo de tratamento",
      "Otimizar scripts de WhatsApp"
    ],
    monthly: [
      "Receita por procedimento",
      "Análise de Custo vs Margem",
      "Conversão de Invisalign & Implantes",
      "Taxa de retenção de pacientes"
    ]
  };

  const activities = [
    { title: '1. Higienização & Organização', items: ['Limpeza geral (chão, paredes, superfícies)', 'Organização de armários e gavetas', 'Controle de estoque de limpeza'] },
    { title: '2. Biossegurança', items: ['Esterilização conforme protocolos HQ', 'Processamento de instrumentos (Lavar/Secar/Empacotar)', 'Auditoria de POPs clínicos'] },
    { title: '3. Atendimento Humanizado', items: ['Gestão multicanal (WhatsApp, Social, Site)', 'Acolhimento presencial personalizado', 'Escuta ativa e empatia total'] },
    { title: '4. Diagnóstico & Planejamento', items: ['Avaliação clínica inicial detalhada', 'Planejamento digital (iTero/Invisalign)', 'Alinhamento de expectativas e resultados'] },
    { title: '5. Execução Clínica', items: ['Profilaxia e manutenção', 'Ortodontia digital de alta performance', 'Finalização e retenção pós-tratamento'] },
    { title: '6. Marketing & Demanda', items: ['Criação de conteúdo estratégico', 'Estratégia Digital e SEO', 'Cross-selling e up-selling ativo'] }
  ];

  const operatingLogic = [
    { step: 'WhatsApp', icon: '🟢' },
    { step: 'CRM', icon: '📁' },
    { step: 'Script', icon: '📝' },
    { step: 'Agenda', icon: '📅' },
    { step: 'Tratamento', icon: '🦷' },
    { step: 'Follow-up', icon: '🔄' },
    { step: 'Retenção', icon: '💎' },
    { step: 'Upsell', icon: '📈' }
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="flex bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-sm gap-2">
        {[
          { id: 'routine', label: 'Rotinas de Gestão' },
          { id: 'logic', label: 'Lógica Operacional' },
          { id: 'activities', label: 'Atividades Chave' },
          { id: 'tech', label: 'Blueprint Técnico' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeTab === tab.id ? 'bg-sky-500 text-white shadow-xl shadow-sky-100' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'routine' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">🔄</span>
                  <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter">Diário</h4>
               </div>
               <ul className="space-y-4">
                  {routines.daily.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600 border border-slate-100 italic">
                       • {r}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">📅</span>
                  <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter">Semanal</h4>
               </div>
               <ul className="space-y-4">
                  {routines.weekly.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600 border border-slate-100 italic">
                       • {r}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">📊</span>
                  <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter">Mensal</h4>
               </div>
               <ul className="space-y-4">
                  {routines.monthly.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600 border border-slate-100 italic">
                       • {r}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        )}

        {activeTab === 'logic' && (
          <div className="space-y-12">
            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
               <h3 className="text-3xl font-black tracking-tighter mb-12 uppercase text-center">Operating Logic Flow</h3>
               
               <div className="flex flex-wrap justify-center items-center gap-4">
                  {operatingLogic.map((s, i) => (
                    <React.Fragment key={s.step}>
                      <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 w-28 group hover:bg-sky-500 hover:scale-110 transition-all cursor-default">
                         <span className="text-2xl group-hover:animate-bounce">{s.icon}</span>
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white">{s.step}</span>
                      </div>
                      {i < operatingLogic.length - 1 && (
                        <div className="text-sky-500 font-black text-xl px-2">→</div>
                      )}
                    </React.Fragment>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                  <h4 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tighter">Jornada do Paciente (2026)</h4>
                  <p className="text-sm font-medium text-slate-500 italic mb-8 leading-relaxed">
                    Lead → Atendimento → Avaliação → Planejamento Digital → Execução → Pós-tratamento → Fidelização.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-sky-50 rounded-3xl border border-sky-100 flex items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm">🤖</div>
                       <div>
                         <h5 className="text-sm font-black text-sky-900">REGINA - AI AGENT</h5>
                         <p className="text-[10px] font-bold text-sky-700 uppercase">Gestora de Relacionamento & Valor</p>
                       </div>
                    </div>
                  </div>
               </div>
               <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center space-y-4">
                  <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest">Regra CRM de Ouro</h4>
                  <p className="text-2xl font-black text-slate-800 tracking-tighter leading-tight">
                    "Nenhum lead pode ficar sem contato por mais de 48h."
                  </p>
                  <p className="text-xs font-medium text-slate-400 italic">Obrigatório registro histórico completo de cada interação.</p>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <div key={act.title} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                <h4 className="text-lg font-black text-slate-800 tracking-tighter mb-6 uppercase group-hover:text-sky-500 transition-colors">{act.title}</h4>
                <ul className="space-y-3">
                   {act.items.map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-500 italic leading-relaxed">
                        <span className="text-sky-400 font-black">•</span>
                        {item}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
               <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">PRIME ODONTOLOGIA OS (v1.0)</h3>
               <p className="text-slate-400 text-sm font-medium mb-10 italic">Especificação Técnica Oficial para TI</p>
               
               <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                       <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4">Arquitetura de Sistemas</h5>
                       <ul className="text-xs space-y-2 font-bold text-slate-300">
                         <li>• Frontend: Web Responsivo</li>
                         <li>• Backend: API REST</li>
                         <li>• Banco: Relacional (ERD)</li>
                         <li>• Integrações: GCalendar, WhatsApp API, gov.br</li>
                       </ul>
                    </div>
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                       <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4">Segurança & LGPD</h5>
                       <ul className="text-xs space-y-2 font-bold text-slate-300">
                         <li>• Controle RBAC (Perfil)</li>
                         <li>• Logs de Auditoria Local</li>
                         <li>• Criptografia de Dados Sensíveis</li>
                         <li>• Segregação por Unidade</li>
                       </ul>
                    </div>
                  </div>

                  <div className="p-10 bg-white p-1 rounded-3xl overflow-hidden shadow-inner">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Entity Relationship Model (UML)</h5>
                    <div className="p-4 grid grid-cols-3 gap-2">
                       {['PATIENT', 'DEAL', 'APPOINTMENT', 'MEDICAL_RECORD', 'INVOICE', 'CONSENT', 'UNIT', 'USER'].map(entity => (
                         <div key={entity} className="p-3 bg-slate-100 rounded-xl text-center font-black text-[9px] text-slate-600 border border-slate-200">
                           {entity}
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-sky-50 p-10 rounded-[3rem] border border-sky-100 text-center">
               <p className="text-xs font-black text-sky-600 uppercase tracking-[0.3em] mb-4">Escalabilidade de Franquia</p>
               <p className="text-md font-bold text-sky-800 italic max-w-2xl mx-auto">"Arquitetura preparada para governança centralizada e comparativos de desempenho multiunidade."</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OperationsHubView;
