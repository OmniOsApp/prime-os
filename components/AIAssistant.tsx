
import React, { useState } from 'react';
import { Patient } from '../types';
import { analyzeSymptoms, generateSalesScript } from '../services/geminiService';

interface AIAssistantProps {
  patients: Patient[];
}

const AIAssistant: React.FC<AIAssistantProps> = ({ patients }) => {
  const [activeTab, setActiveTab] = useState<'ai_consultant' | 'playbook' | 'scripts'>('playbook');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleProcess = async () => {
    if (!inputText) return;
    setIsLoading(true);
    setResult('');
    
    let response = '';
    if (activeTab === 'ai_consultant') {
      response = await analyzeSymptoms(inputText);
    } else {
      response = await generateSalesScript(inputText);
    }
    
    setResult(response || 'Sem resposta disponível.');
    setIsLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Script Prime copiado com sucesso!');
  };

  const playbookScripts = [
    {
      id: '1.1',
      title: "Primeiro Contato – Boas-vindas",
      content: "Olá 😊 Tudo bem?\nAqui é a Clara, da Prime Odontologia 🦷\nQue bom receber sua mensagem!\nPara te ajudar da melhor forma, posso te fazer algumas perguntinhas rápidas?",
      tag: "INÍCIO"
    },
    {
      id: '1.2',
      title: "Script de Qualificação (Obrigatório)",
      content: "Perfeito 💙\nMe conta, por favor:\n1️⃣ O que te incomoda ou o que você gostaria de melhorar no seu sorriso hoje?\n2️⃣ Você sente dor ou é mais uma questão estética/preventiva?\n3️⃣ Já fez algum tratamento odontológico recentemente?",
      tag: "QUALIFICAÇÃO"
    },
    {
      id: '1.3',
      title: "Oferta Avaliação + Limpeza (Entrada)",
      content: "Entendi 😊 Aqui na Prime Odontologia trabalhamos com uma avaliação bem completa, humanizada e sem pressa.\n👉 Nessa consulta fazemos:\n✔ Avaliação clínica detalhada\n✔ Orientação personalizada\n✔ Quando indicado, limpeza preventiva\nAssim conseguimos indicar o melhor tratamento para você, com clareza e sem surpresas.\nPosso verificar os horários disponíveis para você?",
      tag: "OFERTA"
    },
    {
      id: '1.4',
      title: "Confirmação de Agendamento",
      content: "Perfeito! Seu atendimento ficou agendado 💙\n📍 Prime Odontologia\n📅 Data: ____\n⏰ Horário: ____\nQualquer imprevisto é só nos avisar com antecedência 😊\nTe esperamos!",
      tag: "AGENDA"
    },
    {
      id: '1.5',
      title: "Lembrete 24h",
      content: "Oi 😊\nPassando para confirmar sua consulta amanhã na Prime Odontologia 🦷\n📅 ____ | ⏰ ____\nEstamos te aguardando 💙",
      tag: "RETENÇÃO"
    }
  ];

  const salesFocus = [
    { title: 'Invisalign', focus: 'Estética & Alinhamento' },
    { title: 'Implantes', focus: 'Função & Autoestima' },
    { title: 'Clareamento', focus: 'Brilho & Segurança' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-12">
      <div className="bg-white p-3 rounded-[2.5rem] border border-slate-100 shadow-sm flex gap-2">
        {(['playbook', 'ai_consultant', 'scripts'] as const).map(tab => (
          <button 
            key={tab}
            onClick={() => { setActiveTab(tab); setResult(''); }}
            className={`flex-1 py-4 rounded-[1.8rem] font-black text-[11px] uppercase tracking-widest transition-all duration-500 ${
              activeTab === tab ? 'bg-sky-500 text-white shadow-xl shadow-sky-100' : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {tab === 'playbook' ? 'Playbook WhatsApp' : tab === 'ai_consultant' ? 'Assistente Operacional' : 'Scripts Personalizados IA'}
          </button>
        ))}
      </div>

      {activeTab === 'playbook' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbookScripts.map((script) => (
            <div key={script.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 bg-sky-50 px-3 py-1 rounded-full">{script.tag}</span>
                  <span className="text-xl opacity-20 group-hover:opacity-100 transition-opacity">📘</span>
                </div>
                <h4 className="text-md font-black text-slate-800 mb-4 tracking-tighter">{script.title}</h4>
                <div className="bg-slate-50 p-6 rounded-3xl text-[13px] text-slate-600 font-medium leading-relaxed italic mb-8 border border-slate-100">
                  {script.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
              <button 
                onClick={() => copyToClipboard(script.content)}
                className="w-full py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold text-[11px] hover:bg-sky-500 hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Copiar Script Oficial
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'ai_consultant' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h4 className="text-xl font-black text-slate-800 mb-6 tracking-tight">Consultoria Operacional IA</h4>
              <p className="text-sm text-slate-500 mb-8 font-medium italic">"Você é a inteligência operacional oficial da Prime Odontologia."</p>
              <textarea 
                rows={6}
                className="w-full px-8 py-6 rounded-[2.2rem] bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-sky-500/10 text-sm resize-none transition-all"
                placeholder="Ex: Como lidar com um paciente que falta sem avisar pela segunda vez?"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
              ></textarea>
              <button 
                onClick={handleProcess}
                disabled={isLoading || !inputText}
                className="w-full mt-8 py-5 bg-slate-900 text-white rounded-[1.8rem] font-bold text-sm hover:bg-sky-600 transition-all shadow-xl disabled:opacity-20 flex items-center justify-center gap-3"
              >
                {isLoading ? 'Consultando Playbook...' : 'Gerar Diretriz Prime'}
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {salesFocus.map(f => (
                <div key={f.title} className="p-4 bg-white rounded-3xl border border-slate-100 text-center">
                  <span className="block text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">{f.focus}</span>
                  <span className="text-xs font-bold text-slate-800">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-sky-500 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h4 className="text-2xl font-black mb-10 flex items-center gap-4 relative z-10">
              <span className="w-12 h-12 rounded-[1.5rem] bg-white text-sky-500 flex items-center justify-center text-xl shadow-lg">✨</span>
              Parecer Operacional
            </h4>
            
            <div className="flex-1 overflow-y-auto text-sky-50 text-[15px] leading-relaxed font-medium whitespace-pre-wrap relative z-10 pr-4">
              {result || "Aguardando solicitação para fornecer diretrizes baseadas nos padrões éticos e humanizados da Prime Odontologia..."}
            </div>
            
            {result && (
              <button onClick={() => copyToClipboard(result)} className="mt-10 py-4 px-8 bg-white/20 hover:bg-white/30 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all relative z-10 self-start">
                Copiar Diretriz
              </button>
            )}
          </div>
        </div>
      )}

      {activeTab === 'scripts' && (
        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center max-w-4xl mx-auto space-y-8">
           <div className="w-24 h-24 bg-sky-50 text-sky-500 rounded-[2rem] flex items-center justify-center text-4xl mx-auto shadow-inner">⚡</div>
           <div className="space-y-4">
             <h4 className="text-2xl font-black text-slate-800 tracking-tight">Gerador de Scripts Contextuais</h4>
             <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
               Gere abordagens personalizadas para Invisalign, Implantes ou Planos Preventivos mantendo o tom de voz acolhedor e profissional da marca.
             </p>
           </div>
           
           <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Ex: Paciente quer saber se Invisalign dói..."
                className="w-full pl-8 pr-32 py-5 rounded-[1.8rem] bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-sky-500/10 text-sm transition-all"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
              />
              <button 
                onClick={handleProcess}
                disabled={isLoading || !inputText}
                className="absolute right-3 top-2.5 bottom-2.5 px-6 bg-sky-500 text-white rounded-2xl font-bold text-xs hover:bg-sky-600 transition-all shadow-md disabled:opacity-50"
              >
                {isLoading ? '...' : 'GERAR'}
              </button>
           </div>
           
           {result && (
             <div className="bg-slate-50 p-10 rounded-[2.5rem] text-left border border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 italic whitespace-pre-wrap">{result}</p>
                <button onClick={() => copyToClipboard(result)} className="text-sky-500 font-black text-[10px] uppercase tracking-widest hover:underline">Copiar para WhatsApp</button>
             </div>
           )}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
