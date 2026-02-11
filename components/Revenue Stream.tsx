
import React, { useState } from 'react';
import { Product } from '../types';

const RevenueView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'pricing' | 'projections'>('catalog');

  const products: Product[] = [
    // LOW TICKET
    { id: '1', name: 'Consulta + Check-up Prime', category: 'Low Ticket', price: 150, description: 'Avaliação odontológica detalhada com tecnologia de diagnóstico Prime. Porta de entrada para novos pacientes.', indications: ['Check-up Anual', 'Limpeza', 'Avaliação Inicial'], goal: 'Volume & Confiança', cta: 'Agendar Check-up', upsellSuggestion: 'Clareamento Dental' },
    { id: '2', name: 'Plano Preventivo Anual', category: 'Recorrente', price: 1200, description: 'Cobertura completa de prevenção por 12 meses. Fidelização e previsibilidade de caixa.', indications: ['Prevenção', 'Manutenção', 'Fidelidade'], goal: 'LTV & Recorrência', cta: 'Aderir ao Plano', upsellSuggestion: 'Invisalign' },
    
    // MID TICKET
    { id: '3', name: 'Clareamento Dental Moderno', category: 'Mid Ticket', price: 900, description: 'Tratamento estético de alto impacto visual e rápida conversão. Ponte entre saúde e estética.', indications: ['Estética', 'Autoestima', 'Sem Dor'], goal: 'Conversão & Desejo', cta: 'Quero Sorriso Branco', upsellSuggestion: 'Lentes de Porcelana' },
    
    // HIGH TICKET
    { id: '4', name: 'Invisalign® Full Treatment', category: 'High Ticket', price: 15000, description: 'O alinhador mais avançado do mundo. Produto âncora da Prime Odontologia.', indications: ['Alinhamento', 'Conforto', 'Digital'], goal: 'Lucro & Status', cta: 'Avaliar Invisalign', upsellSuggestion: 'Clareamento Final' },
    { id: '5', name: 'Implante Dentário Unitário', category: 'High Ticket', price: 4500, description: 'Recuperação funcional e estética com tecnologia de ponta. Reabilitação definitiva.', indications: ['Saúde', 'Função', 'Autoestima'], goal: 'Reabilitação Premium', cta: 'Consultar Implante', upsellSuggestion: 'Coroa de Porcelana' },
  ];

  const pricingMaster = [
    { treatment: 'Invisalign (Simples)', min: 10000, max: 15000, category: 'High' },
    { treatment: 'Invisalign (Complexo)', min: 15000, max: 25000, category: 'High' },
    { treatment: 'Lentes Porcelana (Dente)', min: 2500, max: 4500, category: 'High' },
    { treatment: 'Clareamento Dental', min: 900, max: 2500, category: 'Mid' },
    { treatment: 'Limpeza Profissional', min: 180, max: 350, category: 'Low' },
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex bg-white p-2 rounded-3xl border border-slate-100 shadow-sm gap-2">
        {(['catalog', 'pricing', 'projections'] as const).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeTab === tab ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {tab === 'catalog' ? 'Catálogo de Ofertas' : tab === 'pricing' ? 'Precificação Master' : 'Projeções de Caixa'}
          </button>
        ))}
      </div>

      {activeTab === 'catalog' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all relative overflow-hidden">
               <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-10 transition-transform group-hover:scale-125 ${
                 p.category === 'High Ticket' ? 'bg-amber-400' : p.category === 'Mid Ticket' ? 'bg-sky-400' : 'bg-emerald-400'
               }`}></div>
               <div className="flex justify-between items-start mb-10">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    p.category === 'High Ticket' ? 'bg-amber-50 text-amber-600' : 
                    p.category === 'Mid Ticket' ? 'bg-sky-50 text-sky-600' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {p.category}
                  </span>
                  <span className="text-2xl group-hover:rotate-12 transition-transform">🦷</span>
               </div>
               <h4 className="text-2xl font-black text-slate-800 tracking-tighter mb-4 leading-none">{p.name}</h4>
               <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8 flex-1 italic">"{p.description}"</p>
               
               <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="bg-slate-50 p-4 rounded-2xl">
                     <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Valor Sugerido</p>
                     <p className="text-xl font-black text-slate-800">R$ {p.price.toLocaleString()}</p>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-2xl">
                     <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Próximo Passo</p>
                     <p className="text-[10px] font-black text-sky-500 uppercase">{p.upsellSuggestion}</p>
                   </div>
                 </div>
                 <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-black/5">
                   Vender no WhatsApp
                 </button>
               </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'pricing' && (
        <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tratamento / Serviço</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Categoria</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Preço Mínimo</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Preço Máximo</th>
                <th className="px-10 py-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status Franquia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {pricingMaster.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-10 py-6 font-black text-slate-800">{p.treatment}</td>
                  <td className="px-10 py-6">
                    <span className={`text-[10px] font-black uppercase ${p.category === 'High' ? 'text-amber-500' : 'text-sky-500'}`}>{p.category}</span>
                  </td>
                  <td className="px-10 py-6 font-bold text-slate-700">R$ {p.min.toLocaleString()}</td>
                  <td className="px-10 py-6 font-bold text-slate-700">R$ {p.max.toLocaleString()}</td>
                  <td className="px-10 py-6">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase">PADRÃO PRIME</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'projections' && (
        <div className="bg-slate-900 p-16 rounded-[4rem] text-white text-center space-y-8 shadow-3xl">
           <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center text-4xl mx-auto border border-white/10">📈</div>
           <h3 className="text-4xl font-black tracking-tighter leading-none">Simulador de Faturamento</h3>
           <p className="text-slate-400 max-w-xl mx-auto font-medium italic">"Calcule sua receita mensal baseada na escada de valor. Combine volume Low Ticket com margem High Ticket para lucratividade máxima."</p>
           <button className="px-12 py-5 bg-sky-500 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-sky-500/20">
             Abrir Calculadora Revenue
           </button>
        </div>
      )}
    </div>
  );
};

export default RevenueView;
