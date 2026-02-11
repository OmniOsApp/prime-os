
import React, { useState } from 'react';

const SalesPlaybookView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'philosophy' | 'ladder' | 'scripts' | 'catalog' | 'ia-integration'>('philosophy');

  const philosophy = [
    { title: 'Solução vs Procedimento', desc: 'Na Prime, não vendemos procedimentos. Vendemos soluções para pessoas.', icon: '🎯' },
    { title: 'Pessoas Primeiro', desc: 'A venda acontece quando o paciente se sente ouvido e confia no profissional.', icon: '👥' },
    { title: 'Educação Consultiva', desc: 'Entender o valor e visualizar o resultado gera fechamento natural.', icon: '💡' },
    { title: 'Clareza & Previsibilidade', desc: 'Mostramos o caminho completo antes mesmo de começar.', icon: '💎' },
  ];

  const ladder = [
    { stage: 'LOW TICKET', items: 'Consulta, Limpeza, Plano Preventivo', goal: 'Confiança & LTV (Entrada)', color: 'bg-emerald-500' },
    { stage: 'MID TICKET', items: 'Clareamento, Facetas Resina, Ortodontia Trad.', goal: 'Conversão & Margem', color: 'bg-sky-500' },
    { stage: 'HIGH TICKET', items: 'Invisalign, Lentes Porcelana, Implantes', goal: 'Lucro & Status (Transformação)', color: 'bg-slate-900' },
  ];

  const whatsappFlow = [
    { id: '1.1', title: 'Lead Welcome', text: 'Olá 😊 Tudo bem? Aqui é a Clara, da Prime Odontologia 🦷\nQue bom receber sua mensagem! Para te ajudar da melhor forma, posso te fazer algumas perguntinhas rápidas?' },
    { id: '1.2', title: 'Qualificação (Obrigatório)', text: 'Perfeito 💙 Me conta, por favor:\n1️⃣ O que te incomoda ou o que você gostaria de melhorar no seu sorriso hoje?\n2️⃣ Você sente dor ou é mais uma questão estética/preventiva?\n3️⃣ Já fez algum tratamento odontológico recentemente?' },
    { id: '1.3', title: 'Avaliação + Limpeza (Entrada)', text: 'Entendi 😊 Aqui na Prime Odontologia trabalhamos com uma avaliação bem completa, humanizada e sem pressa.\nNessa consulta fazemos:\n✔ Avaliação clínica detalhada\n✔ Orientação personalizada\n✔ Quando indicado, limpeza preventiva\nAssim conseguimos indicar o melhor tratamento para você, com clareza e sem surpresas. Posso verificar os horários disponíveis para você?' },
    { id: '1.4', title: 'Confirmação', text: 'Perfeito! Seu atendimento ficou agendado 💙\n📍 Prime Odontologia\n📅 Data: ____\n⏰ Horário: ____\nQualquer imprevisto é só nos avisar com antecedência 😊 Te esperamos!' },
    { id: '1.5', title: 'Lembrete 24h', text: 'Oi 😊 Passando para confirmar sua consulta amanhã na Prime Odontologia 🦷\n📅 ____ | ⏰ ____\nEstamos te aguardando 💙' },
  ];

  const coreScripts = [
    { 
      title: 'Implante Dentário (Manual)', 
      text: 'Entendo como a perda de um dente pode impactar mastigação e autoestima. Aqui na Prime Odontologia trabalhamos com planejamento seguro, exames detalhados e acompanhamento próximo em todas as etapas. O implante devolve função, conforto e estética natural, trazendo mais segurança no dia a dia. O ideal é fazermos uma avaliação para entender o seu caso. Posso agendar para você?', 
      tag: 'CONVERSÃO' 
    },
    { 
      title: 'Invisalign (Social Media)', 
      text: 'Você já pensou em alinhar seus dentes, mas não queria usar aparelho metálico? O Invisalign é um tratamento com alinhadores transparentes, praticamente invisíveis, removíveis e muito confortáveis. Aqui na Prime, fazemos todo o planejamento digital para mostrar o resultado antes mesmo de começar. Além da estética, o alinhamento melhora a mordida, facilita a higiene e evita desgastes futuros. O primeiro passo é uma avaliação com escaneamento digital. Posso verificar um horário para você?', 
      tag: 'DESEJO' 
    }
  ];

  const catalogTexts = [
    { category: 'A. ENTRY PRODUCTS', title: 'Avaliação + Limpeza Preventiva', desc: 'Avaliação odontológica completa com foco em saúde, estética e prevenção. Atendimento humanizado, sem pressa e com orientações personalizadas.', tags: ['Check-up', 'Manutenção', 'Primeiro Atendimento'] },
    { category: 'B. CORE PRODUCTS', title: 'Invisalign®', desc: 'Alinhe seu sorriso com alinhadores transparentes, confortáveis e quase invisíveis. Tratamento moderno, discreto e personalizado.', tags: ['Sem fios', 'Removível', 'Planejamento Digital'] },
    { category: 'C. PREMIUM', title: 'Implantes Dentários', desc: 'Mastigação segura, estética natural e qualidade de vida. Solução definitiva para perda de dentes.', tags: ['Função', 'Estética', 'Segurança'] },
    { category: 'D. RECURRING', title: 'Plano Anual', desc: 'Plano de acompanhamento odontológico com consultas periódicas, prevenção e cuidados contínuos.', tags: ['Economia', 'Prevenção', 'Saúde LP'] },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Texto copiado!');
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Navigation */}
      <div className="flex flex-wrap bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-sm gap-2">
        {[
          { id: 'philosophy', label: '1. Filosofia' },
          { id: 'ladder', label: '2. Escada' },
          { id: 'scripts', label: '3. Scripts WhatsApp' },
          { id: 'catalog', label: '4. Catálogo' },
          { id: 'ia-integration', label: '5. Integração IA' }
        ].map(section => (
          <button 
            key={section.id}
            onClick={() => setActiveSection(section.id as any)}
            className={`px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeSection === section.id ? 'bg-sky-500 text-white shadow-xl shadow-sky-100' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeSection === 'philosophy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map(item => (
              <div key={item.title} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h4 className="text-lg font-black text-slate-800 tracking-tight mb-2 uppercase">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed italic">"{item.desc}"</p>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'ladder' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {ladder.map((item, i) => (
              <div key={item.stage} className="flex flex-col md:flex-row gap-6 items-center">
                 <div className={`w-full md:w-64 p-8 ${item.color} text-white rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center`}>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Passo {i+1}</span>
                    <h4 className="text-xl font-black">{item.stage}</h4>
                 </div>
                 <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex justify-between items-center w-full">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ofertas Sugeridas</p>
                      <p className="text-sm font-bold text-slate-700">{item.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Objetivo Comercial</p>
                      <p className="text-sm font-black text-slate-900">{item.goal}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'scripts' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreScripts.map(s => (
                <div key={s.title} className="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-2xl flex flex-col group">
                   <div className="flex justify-between items-center mb-8">
                      <span className="px-4 py-1.5 bg-white/10 text-sky-400 rounded-full text-[9px] font-black uppercase tracking-widest">{s.tag}</span>
                      <span className="text-2xl">⚡</span>
                   </div>
                   <h4 className="text-xl font-black mb-6 tracking-tighter">{s.title}</h4>
                   <div className="bg-white/5 p-6 rounded-3xl text-sm text-slate-300 font-medium italic leading-relaxed border border-white/10 mb-8 flex-1">
                     "{s.text}"
                   </div>
                   <button 
                    onClick={() => copyToClipboard(s.text)}
                    className="w-full py-4 bg-sky-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-400 transition-all"
                   >
                     Copiar Script
                   </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm">
               <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-10 text-center">Fluxo de Atendimento WhatsApp (1.1 - 1.5)</h3>
               <div className="space-y-6 max-w-4xl mx-auto">
                  {whatsappFlow.map(f => (
                    <div key={f.id} className="flex gap-6 group">
                       <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0 group-hover:bg-sky-50 group-hover:text-sky-500 transition-all">
                         {f.id}
                       </div>
                       <div className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex justify-between items-start">
                          <div>
                            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{f.title}</h5>
                            <p className="text-sm font-medium text-slate-600 whitespace-pre-wrap">"{f.text}"</p>
                          </div>
                          <button onClick={() => copyToClipboard(f.text)} className="text-sky-500 p-2 hover:bg-sky-100 rounded-lg transition-all">
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeSection === 'catalog' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {catalogTexts.map(c => (
              <div key={c.title} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col group hover:border-sky-300 transition-all">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{c.category}</p>
                 <h4 className="text-2xl font-black text-slate-800 tracking-tighter mb-4">{c.title}</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed italic mb-8 flex-1">"{c.desc}"</p>
                 <div className="flex flex-wrap gap-2 mb-8">
                   {c.tags.map(t => <span key={t} className="px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-black uppercase rounded-full">✔ {t}</span>)}
                 </div>
                 <button 
                  onClick={() => copyToClipboard(c.desc)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all"
                 >
                   Copiar Texto para Catálogo
                 </button>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'ia-integration' && (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
               <h3 className="text-3xl font-black tracking-tighter mb-10">Sales Agent IA + WhatsApp API</h3>
               
               <div className="space-y-10 relative">
                  <div>
                    <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4">Objetivo da Integração</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Instagram gera o lead', 'WhatsApp recebe a mensagem', 'IA sugere resposta e próximo passo', 'Notion registra tudo', 'Conversão acelerada'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                           <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-6">Arquitetura de Fluxo (Make / Zapier)</h5>
                    <div className="space-y-4">
                       {[
                         { m: 'MÓDULO 1', d: 'WhatsApp Business API (Trigger)' },
                         { m: 'MÓDULO 2', d: 'Notion | Buscar ou Criar Lead' },
                         { m: 'MÓDULO 3', d: 'Sales Agent IA (Google AI Studio)' },
                         { m: 'MÓDULO 4', d: 'IA Sugere Resposta (Não envia)' },
                         { m: 'MÓDULO 5', d: 'Atendente Humano Valida e Envia' }
                       ].map((step, i) => (
                         <div key={i} className="flex items-center gap-4">
                            <span className="text-[9px] font-black text-slate-500 w-20 shrink-0">{step.m}</span>
                            <div className="flex-1 h-px bg-white/10"></div>
                            <span className="text-xs font-bold text-slate-300">{step.d}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-3xl">
                       <h6 className="text-[9px] font-black text-rose-400 uppercase tracking-widest mb-3">Segurança ❌</h6>
                       <ul className="text-[11px] text-rose-200/60 space-y-1 font-medium italic">
                         <li>• IA nunca envia sozinha</li>
                         <li>• IA não informa preços</li>
                         <li>• IA não promete resultados</li>
                       </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
                       <h6 className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-3">Conformidade ✅</h6>
                       <ul className="text-[11px] text-emerald-200/60 space-y-1 font-medium italic">
                         <li>• Humano valida sempre</li>
                         <li>• Notion registra histórico</li>
                         <li>• Gerente supervisiona</li>
                       </ul>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="text-center p-10 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 opacity-60">
               <h4 className="text-xl font-black text-slate-400 tracking-tighter uppercase mb-4">Status da Automação</h4>
               <p className="text-xs font-bold text-slate-400 italic">"Implementação em andamento conforme arquitetura oficial v3.5."</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesPlaybookView;
