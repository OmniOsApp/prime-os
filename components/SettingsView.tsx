
import React, { useState } from 'react';

const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'developer'>('general');
  const [domain] = useState('primeodontologia.com.br');
  const [sslActive] = useState(true);

  const dnsRecords = [
    { type: 'A', host: '@', value: '76.76.21.21', status: 'Propagado' },
    { type: 'CNAME', host: 'www', value: 'cname.primeos.app', status: 'Propagado' },
    { type: 'CNAME', host: 'os', value: 'cname.primeos.app', status: 'Propagado' },
  ];

  const files = [
    'App.tsx', 'types.ts', 'constants.tsx', 'index.tsx', 'README.md',
    'components/Dashboard.tsx', 'components/AIAssistant.tsx', 'components/RevenueView.tsx',
    'services/geminiService.ts'
  ];

  return (
    <div className="space-y-12 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter">Configurações da Unidade</h2>
          <p className="text-md text-slate-500 font-medium italic">Gestão de domínio, marca e repositório Prime.</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl border border-slate-100 shadow-sm gap-1">
          <button 
            onClick={() => setActiveTab('general')}
            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
              activeTab === 'general' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            Geral
          </button>
          <button 
            onClick={() => setActiveTab('developer')}
            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
              activeTab === 'developer' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            GitHub & Dev
          </button>
        </div>
      </div>

      {activeTab === 'general' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-4">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
               <div className="relative">
                 <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">Domínio & Identidade Digital</h3>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${sslActive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      {sslActive ? 'SSL ATIVO / SEGURO' : 'SSL PENDENTE'}
                    </span>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Domínio Principal</label>
                      <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                         <span className="text-2xl">🌐</span>
                         <span className="text-lg font-black text-slate-800">{domain}</span>
                         <button className="ml-auto text-sky-500 font-bold text-xs uppercase tracking-widest hover:underline">Alterar</button>
                      </div>
                    </div>

                    <div className="space-y-4">
                       <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Configurações de DNS (Obrigatório)</p>
                       <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden">
                          <table className="w-full text-left text-xs">
                             <thead className="bg-slate-50">
                                <tr>
                                   <th className="px-6 py-4 font-black text-slate-400 uppercase tracking-widest">Tipo</th>
                                   <th className="px-6 py-4 font-black text-slate-400 uppercase tracking-widest">Host</th>
                                   <th className="px-6 py-4 font-black text-slate-400 uppercase tracking-widest">Valor</th>
                                   <th className="px-6 py-4 font-black text-slate-400 uppercase tracking-widest">Status</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50 font-medium text-slate-600">
                                {dnsRecords.map((record, i) => (
                                  <tr key={i}>
                                     <td className="px-6 py-4 font-bold">{record.type}</td>
                                     <td className="px-6 py-4">{record.host}</td>
                                     <td className="px-6 py-4 font-mono bg-slate-50/50">{record.value}</td>
                                     <td className="px-6 py-4">
                                        <span className="text-emerald-500 font-bold">{record.status}</span>
                                     </td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
               <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-10">Marca & Personalização</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Logotipo da Unidade</p>
                     <div className="w-full h-40 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-sky-50 hover:border-sky-200 transition-all">
                        <span className="text-3xl group-hover:scale-125 transition-transform">🖼️</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Logo Prime</span>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cor Primária (Hex)</label>
                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                           <div className="w-8 h-8 rounded-lg bg-sky-500 shadow-inner"></div>
                           <span className="font-mono font-bold text-slate-800">#0ea5e9</span>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nome Institucional</label>
                        <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 font-bold text-slate-800 outline-none focus:ring-2 focus:ring-sky-500" defaultValue="Prime Odontologia - Unidade Centro" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full -mr-16 -mb-16 blur-2xl"></div>
                <h4 className="text-xl font-black mb-8 tracking-tight">Status da Franquia</h4>
                <div className="space-y-8">
                   <div className="flex justify-between items-center pb-6 border-b border-white/10">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Plano Operacional</span>
                      <span className="text-sky-400 font-black">PLATINUM</span>
                   </div>
                   <div className="flex justify-between items-center pb-6 border-b border-white/10">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SLA de Atendimento</span>
                      <span className="text-emerald-400 font-black">EXCELENTE</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Integridade de Marca</span>
                      <span className="text-emerald-400 font-black">100%</span>
                   </div>
                </div>
                <button className="w-full mt-10 py-5 bg-white/5 border border-white/10 rounded-[1.8rem] text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                   Baixar Guia de Marca
                </button>
             </div>

             <div className="bg-sky-50 p-10 rounded-[3rem] border border-sky-100">
                <h4 className="text-lg font-black text-sky-800 mb-6 tracking-tight">Apoio ao Franqueado</h4>
                <p className="text-xs font-medium text-sky-700 leading-relaxed mb-8 italic">
                  "Qualquer problema com a propagação do seu domínio primeodontologia.com.br, entre em contato com o suporte técnico da matriz via WhatsApp."
                </p>
                <button className="w-full py-4 bg-sky-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-sky-200 hover:bg-sky-600 transition-all">
                  Suporte Técnico
                </button>
             </div>
          </div>
        </div>
      ) : (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl space-y-10 border border-white/5">
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">🐙</div>
                       <div>
                          <h3 className="text-xl font-black tracking-tight">GitHub Integration</h3>
                          <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Repo: prime-odontologia/os-v3.5</p>
                       </div>
                    </div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-black uppercase tracking-widest">Connected</span>
                 </div>

                 <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                       <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Last Deployment (main)</h5>
                       <div className="flex justify-between items-center">
                          <p className="text-sm font-bold text-slate-300">"Add FAQ system to Revenue Hub"</p>
                          <span className="text-[10px] font-mono text-slate-500">#a7f2e1</span>
                       </div>
                       <p className="text-[10px] text-slate-500 mt-2 font-medium">2 hours ago by @prime-dev</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <button className="py-4 bg-sky-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-400 transition-all">
                          Sync Source Code
                       </button>
                       <button className="py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                          Manage Webhooks
                       </button>
                    </div>
                 </div>
              </div>

              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
                 <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-4">Source Explorer</h3>
                 <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 font-mono text-xs space-y-2 max-h-[300px] overflow-y-auto scrollbar-hide">
                    {files.map(file => (
                      <div key={file} className="flex items-center gap-3 text-slate-600 hover:text-sky-500 cursor-pointer">
                         <span className="text-slate-300 opacity-50">📄</span>
                         <span>{file}</span>
                      </div>
                    ))}
                 </div>
                 <button className="w-full py-5 bg-slate-100 text-slate-600 rounded-3xl font-black text-[11px] uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                    Download Project Bundle (.zip)
                 </button>
              </div>
           </div>

           <div className="bg-indigo-50 p-12 rounded-[4rem] border border-indigo-100 flex items-center gap-10">
              <div className="w-24 h-24 bg-indigo-500 rounded-[2rem] flex items-center justify-center text-4xl text-white shadow-xl shadow-indigo-200">🚀</div>
              <div className="flex-1">
                 <h4 className="text-xl font-black text-indigo-900 mb-2">Deploy directly to Production</h4>
                 <p className="text-sm font-medium text-indigo-700 italic max-w-2xl mb-6">
                    Sincronize as atualizações da matriz Prime diretamente com o seu domínio configurado. Mantemos a versão v3.5 estável para todas as unidades Platinum.
                 </p>
                 <div className="flex gap-4">
                    <span className="px-4 py-2 bg-indigo-200/50 text-indigo-700 rounded-xl text-[10px] font-black uppercase tracking-widest">Stable Release v3.5.2</span>
                    <span className="px-4 py-2 bg-indigo-200/50 text-indigo-700 rounded-xl text-[10px] font-black uppercase tracking-widest">Build Status: Success</span>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default SettingsView;
