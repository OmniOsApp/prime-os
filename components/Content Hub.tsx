
import React, { useState, useEffect } from 'react';
import { getLatestWebsiteInsights } from '../services/geminiService';

const ContentHub: React.FC = () => {
  const [insight, setInsight] = useState<{ text: string; grounding: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeView, setActiveView] = useState<'blog' | 'strategy' | 'library'>('blog');

  const fetchInsights = async () => {
    setIsLoading(true);
    const result = await getLatestWebsiteInsights("Blog posts e novidades institucionais");
    setInsight(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const libraryItems = [
    { title: "Manual de Marca Prime 2024", type: "PDF", size: "12MB", icon: "🎨" },
    { title: "POPs de Esterilização", type: "PDF", size: "4MB", icon: "🧼" },
    { title: "Playbook WhatsApp v2", type: "Documento", size: "2MB", icon: "📲" },
    { title: "Protocolo Invisalign HQ", type: "PDF", size: "15MB", icon: "✨" },
  ];

  return (
    <div className="space-y-12 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter">Central de Conteúdo</h2>
          <p className="text-md text-slate-500 font-medium italic">Sincronizado com primeodontologia.com.br</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl border border-slate-100 shadow-sm gap-1">
          {(['blog', 'strategy', 'library'] as const).map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveView(tab)}
              className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                activeView === tab ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              {tab === 'blog' ? 'Blog & Feed' : tab === 'strategy' ? 'IA Strategy' : 'Biblioteca'}
            </button>
          ))}
        </div>
      </div>

      {activeView === 'blog' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Feed Institucional (Google Search)</h3>
                <button 
                  onClick={fetchInsights}
                  disabled={isLoading}
                  className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-sky-50 hover:text-sky-500 transition-all disabled:opacity-50"
                >
                  <svg className={`${isLoading ? 'animate-spin' : ''}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                </button>
              </div>

              {isLoading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 bg-slate-50 rounded-3xl animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="prose prose-sky max-w-none text-slate-600 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                    {insight?.text || "Nenhuma atualização encontrada no momento."}
                  </div>
                  
                  {insight?.grounding && insight.grounding.length > 0 && (
                    <div className="pt-8 border-t border-slate-50">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Fontes Oficiais:</p>
                      <div className="flex flex-wrap gap-3">
                        {insight.grounding.map((chunk, idx) => chunk.web && (
                          <a 
                            key={idx} 
                            href={chunk.web.uri} 
                            target="_blank" 
                            className="px-4 py-2 bg-sky-50 text-sky-600 rounded-xl text-xs font-bold border border-sky-100 hover:bg-sky-500 hover:text-white transition-all truncate max-w-xs"
                          >
                            {chunk.web.title || "Ver no Site"}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-sky-500 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-xl font-black mb-6 tracking-tight">Últimas do Blog ✍️</h4>
              <ul className="space-y-6">
                <li className="group cursor-pointer">
                  <p className="text-[10px] font-black text-sky-200 uppercase tracking-widest mb-1">Nov 2023</p>
                  <p className="text-sm font-bold leading-tight group-hover:text-white group-hover:underline">A importância da limpeza preventiva na ortodontia.</p>
                </li>
                <li className="group cursor-pointer">
                  <p className="text-[10px] font-black text-sky-200 uppercase tracking-widest mb-1">Out 2023</p>
                  <p className="text-sm font-bold leading-tight group-hover:text-white group-hover:underline">Invisalign vs Brackets: O que escolher?</p>
                </li>
                <li className="group cursor-pointer">
                  <p className="text-[10px] font-black text-sky-200 uppercase tracking-widest mb-1">Set 2023</p>
                  <p className="text-sm font-bold leading-tight group-hover:text-white group-hover:underline">Sorriso Gengival: Tratamentos e Estética.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">📸</div>
              <h4 className="text-lg font-black text-slate-800 mb-2">Social Funnel</h4>
              <p className="text-xs text-slate-500 mb-6 font-medium">Repurpose site content for Instagram.</p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-500 transition-all">
                Gerar Post IA
              </button>
            </div>
          </div>
        </div>
      )}

      {activeView === 'strategy' && (
        <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm max-w-4xl mx-auto text-center space-y-10">
           <div className="w-24 h-24 bg-sky-50 text-sky-500 rounded-[2.5rem] flex items-center justify-center text-4xl mx-auto shadow-inner">⚡</div>
           <div className="space-y-4">
             <h4 className="text-3xl font-black text-slate-800 tracking-tighter">IA Content Engine</h4>
             <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
               Transforme artigos do site oficial em scripts de vendas, legendas para Instagram ou mensagens de nutrição para o WhatsApp.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-sky-300 transition-all group cursor-pointer text-left">
                 <span className="block text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">🤳</span>
                 <h5 className="text-md font-black text-slate-800 mb-2 uppercase tracking-tighter">Site para Reel</h5>
                 <p className="text-xs text-slate-400 font-medium">Gere um roteiro de 30s baseado em um artigo do blog.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-sky-300 transition-all group cursor-pointer text-left">
                 <span className="block text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">🟢</span>
                 <h5 className="text-md font-black text-slate-800 mb-2 uppercase tracking-tighter">Nutrição WhatsApp</h5>
                 <p className="text-xs text-slate-400 font-medium">Crie mensagens informativas para enviar aos Leads Dormentes.</p>
              </div>
           </div>
        </div>
      )}

      {activeView === 'library' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
           {libraryItems.map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-sky-50 transition-colors"></div>
                <div className="relative">
                  <span className="text-4xl block mb-6">{item.icon}</span>
                  <h5 className="text-md font-black text-slate-800 mb-2 tracking-tighter leading-tight">{item.title}</h5>
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.type} • {item.size}</span>
                    <button className="text-sky-500 hover:scale-125 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    </button>
                  </div>
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default ContentHub;
