
import React, { useState } from 'react';
import { MarketingStrategy, ContentItem, Campaign, MarketingMetric } from '../types';

const MarketingHubView: React.FC = () => {
  const [activeDb, setActiveDb] = useState<'strategy' | 'content' | 'channels' | 'campaigns' | 'leads' | 'metrics'>('strategy');

  const strategies: MarketingStrategy[] = [
    { 
      id: '1', 
      name: 'Dominância Invisalign 2024', 
      goal: '15 fechamentos/mês', 
      primaryOffer: 'Invisalign Full', 
      targetAudience: 'Classe A/B, 25-45 anos',
      painPoint: 'Dentes tortos sem metal',
      promise: 'Sorriso perfeito de forma invisível',
      kpi: 'CAC < R$ 400',
      status: 'Ativo' 
    },
    { 
      id: '2', 
      name: 'Protocolo de Implantes Sênior', 
      goal: 'Recuperar LTV', 
      primaryOffer: 'Implantes Prime', 
      targetAudience: '55+ anos',
      painPoint: 'Dificuldade de mastigação',
      promise: 'Volte a comer o que ama',
      kpi: 'Conversão > 30%',
      status: 'Planejamento' 
    },
  ];

  const contentHub: ContentItem[] = [
    { id: '1', title: 'Bastidores Scanner iTero', type: 'Reel', funnelStage: 'Topo', goal: 'Autoridade', cta: 'Comente "SCANNER"', status: 'Publicado', publishDate: '2023-11-20' },
    { id: '2', title: 'Depoimento Maria (Invisalign)', type: 'Story', funnelStage: 'Meio', goal: 'Conversão', cta: 'Link na Bio', status: 'Produção' },
    { id: '3', title: 'Por que limpar a cada 6 meses?', type: 'Blog', funnelStage: 'Topo', goal: 'Lead', cta: 'Botão WhatsApp', status: 'Ideia' },
  ];

  const metrics: MarketingMetric[] = [
    { date: 'Nov/2023', leads: 245, appointments: 168, conversions: 42, revenue: 142500, cac: 380, roi: 8.5 },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Database Navigation */}
      <div className="flex flex-wrap bg-white p-3 rounded-[2.5rem] border border-slate-100 shadow-sm gap-2">
        {[
          { id: 'strategy', label: '1. Estratégia' },
          { id: 'content', label: '2. Content Hub' },
          { id: 'channels', label: '3. Canais' },
          { id: 'campaigns', label: '4. Campanhas' },
          { id: 'leads', label: '5. Leads/Origem' },
          { id: 'metrics', label: '6. Métricas/ROI' }
        ].map(db => (
          <button 
            key={db.id}
            onClick={() => setActiveDb(db.id as any)}
            className={`px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeDb === db.id ? 'bg-sky-500 text-white shadow-xl shadow-sky-100' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {db.label}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeDb === 'strategy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map(s => (
              <div key={s.id} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-colors"></div>
                <div className="flex justify-between items-start mb-10">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${s.status === 'Ativo' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
                    {s.status}
                  </span>
                  <span className="text-3xl">🧠</span>
                </div>
                <h4 className="text-2xl font-black text-slate-800 tracking-tighter mb-8">{s.name}</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Oferta</p>
                    <p className="text-xs font-bold text-slate-700">{s.primaryOffer}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Objetivo</p>
                    <p className="text-xs font-bold text-slate-700">{s.goal}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Promessa</p>
                    <p className="text-xs font-bold text-slate-700">{s.promise}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">KPI Master</p>
                    <p className="text-xs font-black text-sky-500">{s.kpi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeDb === 'content' && (
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Título do Conteúdo</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tipo</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Etapa Funil</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">CTA</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {contentHub.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-black text-slate-800">{item.title}</td>
                    <td className="px-8 py-6 font-bold text-slate-500">{item.type}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${
                        item.funnelStage === 'Topo' ? 'bg-sky-50 text-sky-600' : 
                        item.funnelStage === 'Meio' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        {item.funnelStage}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-mono text-[11px] text-slate-400">{item.cta}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${item.status === 'Publicado' ? 'text-emerald-500' : 'text-slate-400'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeDb === 'metrics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900 p-8 rounded-[3rem] text-white">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Leads Gerados</p>
                <h4 className="text-4xl font-black">{metrics[0].leads}</h4>
              </div>
              <div className="bg-sky-500 p-8 rounded-[3rem] text-white">
                <p className="text-[10px] font-black text-sky-200 uppercase tracking-widest mb-2">ROI (Retorno)</p>
                <h4 className="text-4xl font-black">{metrics[0].roi}x</h4>
              </div>
              <div className="bg-emerald-500 p-8 rounded-[3rem] text-white">
                <p className="text-[10px] font-black text-emerald-200 uppercase tracking-widest mb-2">Receita Marketing</p>
                <h4 className="text-4xl font-black">R$ {metrics[0].revenue.toLocaleString()}</h4>
              </div>
              <div className="bg-rose-500 p-8 rounded-[3rem] text-white">
                <p className="text-[10px] font-black text-rose-200 uppercase tracking-widest mb-2">CAC (Custo)</p>
                <h4 className="text-4xl font-black">R$ {metrics[0].cac}</h4>
              </div>
            </div>
          </div>
        )}

        {['channels', 'campaigns', 'leads'].includes(activeDb) && (
          <div className="h-96 flex flex-col items-center justify-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200 opacity-50 space-y-4">
             <span className="text-4xl">📊</span>
             <p className="text-xs font-black uppercase tracking-widest text-slate-400">Banco de Dados em Sincronização...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingHubView;
