
import React, { useState } from 'react';

const POPSOPSView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manual' | 'pops' | 'sops_growth'>('manual');
  const [selectedPop, setSelectedPop] = useState<string | null>(null);

  const roles = [
    { name: 'Maria (Gestora)', desc: 'Organização geral, atendimento online, supervisão e relatórios.', icon: '👩‍💼' },
    { name: 'Recepção', desc: 'Acolhimento e agenda.', icon: '📞' },
    { name: 'Auxiliar', desc: 'Limpeza, esterilização e organização.', icon: '🧼' },
    { name: 'Dentista', desc: 'Avaliação, diagnóstico e tratamento.', icon: '🦷' },
  ];

  const pops = [
    { id: 'POP 01', name: 'Limpeza da Clínica', items: ['Limpar consultórios', 'Limpar chão', 'Higienizar superfícies', 'Organizar armários', 'Descartar lixo', 'Conferir materiais'], goal: 'Manter ambiente estéril e organizado.' },
    { id: 'POP 02', name: 'Esterilização', items: ['Lavar instrumentos', 'Secar completamente', 'Separar por tipo', 'Empacotar', 'Esterilizar', 'Armazenar corretamente'], goal: 'Garantir segurança biológica total.' },
    { id: 'POP 03', name: 'Atendimento ao Paciente', items: ['Acolher o paciente', 'Escutar a necessidade', 'Explicar a avaliação', 'Agendar consulta', 'Confirmar dados', 'Realizar follow-up'], goal: 'Encantar e converter leads.' },
    { id: 'POP 04', name: 'Avaliação e Diagnóstico', items: ['Realizar avaliação clínica', 'Identificar necessidades', 'Definir diagnóstico', 'Planejar tratamento', 'Explicar plano ao paciente'], goal: 'Venda consultiva de alto nível.' },
    { id: 'POP 05', name: 'Estoque & Compras', items: ['Conferir estoque clínico', 'Conferir materiais limpeza', 'Verificar estoque mínimo', 'Registrar necessidade compra', 'Informar gestão', 'Organizar recebidos'], goal: 'Fluxo contínuo sem rupturas.' },
    { id: 'POP 06', name: 'Marketing & Conteúdo', items: ['Definir objetivo (educar/conv)', 'Escolher palavra-chave', 'Validar alinhamento serviços', 'Criar conteúdo educativo', 'Inserir CTA avaliação', 'Registrar no sistema'], goal: 'Geração de demanda qualificada.' },
  ];

  const sops_growth = [
    { title: 'Atendimento Comercial WhatsApp', area: 'Sales', content: 'Abertura humanizada → Identificação da dor → Validação emocional → Apresentação de valor → Convite para avaliação.', kpi: 'Taxa de Conversão Invisalign' },
    { title: 'Follow-up e Retenção', area: 'CRM', content: 'D+1 mensagem leve, D+3 conteúdo educativo, D+7 convite, Pós-consulta agradecimento, Manutenção 3-6 meses.', kpi: 'LTV e Taxa de Retorno' },
    { title: 'Treinamento de Vendas', area: 'Trainer', content: 'Módulos: Posicionamento, Dor x Valor, Scripts, Simulações e Feedback. Treinar escuta ativa.', kpi: 'Performance Individual' },
    { title: 'Gestão Estratégica', area: 'Manager', content: 'Revisões semanais e mensais com foco em métricas, posicionamento e performance da equipe.', kpi: 'Ticket Médio e NPS' },
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="flex bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-sm gap-2">
        {[
          { id: 'manual', label: '1. Manual Operacional' },
          { id: 'pops', label: '2. Checklists POPs' },
          { id: 'sops_growth', label: '3. SOPs de Gestão' }
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
        {activeTab === 'manual' && (
          <div className="space-y-12">
            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
               <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">Apresentação Institucional</h3>
               <p className="text-slate-400 font-medium italic mb-10 text-lg">"Focada em saúde bucal, estética dental, tecnologia e atendimento humanizado."</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4">Cultura & Valores</h5>
                    <p className="text-sm font-bold text-slate-300">Empatia, Organização, Clareza, Segurança e Trabalho em Equipe.</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4">Objetivo do Manual</h5>
                    <p className="text-sm font-bold text-slate-300">Padronizar, garantir segurança e manter excelência operacional Prime.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Versão Oficial</span>
                    <p className="text-xs font-black">V1.0 | Uso Interno Exclusivo</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map(role => (
                <div key={role.name} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="text-4xl mb-6">{role.icon}</div>
                  <h4 className="text-lg font-black text-slate-800 tracking-tighter mb-2 uppercase">{role.name}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed italic">"{role.desc}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pops' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {pops.map(pop => (
                <button 
                  key={pop.id}
                  onClick={() => setSelectedPop(pop.id)}
                  className={`w-full text-left p-6 rounded-[2.5rem] border transition-all ${
                    selectedPop === pop.id ? 'bg-sky-500 text-white border-sky-600 shadow-xl' : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${selectedPop === pop.id ? 'text-sky-100' : 'text-slate-400'}`}>{pop.id}</span>
                  <h4 className="text-md font-black tracking-tight uppercase">{pop.name}</h4>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedPop ? (
                <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm animate-in slide-in-from-right-4 duration-300">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">{pops.find(p => p.id === selectedPop)?.name}</h3>
                      <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mt-1">Objetivo: {pops.find(p => p.id === selectedPop)?.goal}</p>
                    </div>
                    <button className="px-6 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all">Imprimir POP</button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Checklist de Execução</p>
                    {pops.find(p => p.id === selectedPop)?.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 group cursor-pointer hover:bg-sky-50 transition-all">
                        <div className="w-8 h-8 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center group-hover:border-sky-500 transition-all">
                          <span className="text-transparent group-hover:text-sky-500 font-black">✓</span>
                        </div>
                        <span className="text-sm font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-slate-50 rounded-3xl">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Responsável pela Verificação</p>
                      <p className="text-xs font-bold text-slate-800">Assinatura Digital Prime</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 rounded-3xl">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Data de Execução</p>
                      <p className="text-xs font-bold text-slate-800">{new Date().toLocaleDateString('pt-BR')}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200 opacity-40 p-20 text-center">
                  <span className="text-6xl mb-6">📝</span>
                  <p className="text-lg font-black text-slate-400 uppercase tracking-tighter">Selecione um POP para visualizar o checklist operacional</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'sops_growth' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sops_growth.map(sop => (
              <div key={sop.title} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all">
                 <div className="flex justify-between items-center mb-8">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest">{sop.area} Agent</span>
                    <span className="text-2xl group-hover:rotate-12 transition-transform">⚡</span>
                 </div>
                 <h4 className="text-xl font-black text-slate-800 tracking-tighter mb-6 uppercase">{sop.title}</h4>
                 <div className="bg-slate-50 p-6 rounded-3xl text-sm text-slate-600 font-medium italic leading-relaxed border border-slate-100 mb-8 flex-1">
                   "{sop.content}"
                 </div>
                 <div className="pt-6 border-t border-slate-50">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">KPI Principal</p>
                   <p className="text-sm font-black text-sky-500">{sop.kpi}</p>
                 </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-sky-50 p-10 rounded-[3rem] border border-sky-100 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent"></div>
        <div className="relative z-10">
          <p className="text-xs font-black text-sky-600 uppercase tracking-[0.3em] mb-4">Padronização & Excelência</p>
          <p className="text-md font-bold text-sky-800 italic max-w-2xl mx-auto">"Organização gera segurança. Cuidado gera confiança. Equipe alinhada gera excelência Prime."</p>
        </div>
      </div>
    </div>
  );
};

export default POPSOPSView;
