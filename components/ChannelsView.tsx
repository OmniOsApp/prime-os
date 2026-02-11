
import React from 'react';

const ChannelsView: React.FC = () => {
  const channels = [
    { name: 'Instagram Funnel', status: 'Ativo', leads: 245, reach: '12.4k', icon: '📸', color: 'bg-pink-50 text-pink-600' },
    { name: 'WhatsApp Automation', status: 'Ativo', leads: 182, reach: '840', icon: '📲', color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Google Ads (Local)', status: 'Pausado', leads: 42, reach: '2.1k', icon: '🔍', color: 'bg-sky-50 text-sky-600' },
  ];

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {channels.map(channel => (
          <div key={channel.name} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className={`w-14 h-14 rounded-2xl ${channel.color} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
                {channel.icon}
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${channel.status === 'Ativo' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                {channel.status}
              </span>
            </div>
            <h4 className="text-xl font-black text-slate-800 tracking-tight mb-6">{channel.name}</h4>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leads Mês</p>
                 <p className="text-2xl font-black text-slate-800">{channel.leads}</p>
               </div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Alcance</p>
                 <p className="text-2xl font-black text-slate-800">{channel.reach}</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-8">Estratégia Instagram: Funil de Conteúdo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
             <h5 className="text-xs font-black text-pink-600 uppercase mb-4 tracking-widest">Topo (Atração)</h5>
             <p className="text-sm font-bold text-slate-700">Reels de bastidores e tecnologia (Scanner, Invisalign).</p>
           </div>
           <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
             <h5 className="text-xs font-black text-indigo-600 uppercase mb-4 tracking-widest">Meio (Desejo)</h5>
             <p className="text-sm font-bold text-slate-700">Depoimentos de pacientes e resultados "Antes x Depois".</p>
           </div>
           <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
             <h5 className="text-xs font-black text-emerald-600 uppercase mb-4 tracking-widest">Fundo (Ação)</h5>
             <p className="text-sm font-bold text-slate-700">CTA direto para WhatsApp com script de qualificação.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsView;
