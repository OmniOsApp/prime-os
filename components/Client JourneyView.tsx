
import React from 'react';

const ClientJourneyView: React.FC = () => {
  const journeyStages = [
    { title: 'Leads', count: 420, conversion: '100%', icon: '🔥', color: 'bg-sky-500' },
    { title: 'Qualificados', count: 184, conversion: '43%', icon: '🔎', color: 'bg-indigo-500' },
    { title: 'Avaliados', count: 122, conversion: '66%', icon: '🦷', color: 'bg-violet-500' },
    { title: 'Convertidos', count: 86, conversion: '70%', icon: '💰', color: 'bg-emerald-500' },
    { title: 'VIP / Promotores', count: 24, conversion: '28%', icon: '💎', color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-10 pb-16">
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-12">Jornada do Cliente Prime</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {journeyStages.map((stage, i) => (
            <React.Fragment key={stage.title}>
              <div className="flex-1 w-full text-center space-y-4">
                <div className={`w-20 h-20 mx-auto rounded-[2rem] ${stage.color} text-white flex items-center justify-center text-3xl shadow-xl shadow-black/5`}>
                  {stage.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{stage.title}</h4>
                  <p className="text-3xl font-black text-slate-900 mt-1">{stage.count}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Conv: {stage.conversion}</p>
                </div>
              </div>
              {i < journeyStages.length - 1 && (
                <div className="hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
          <h4 className="text-xl font-black mb-8 tracking-tight">Onde estamos perdendo pacientes?</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-rose-500/20 rounded-2xl flex items-center justify-center text-rose-500 text-xl border border-rose-500/20">!</div>
              <div>
                <h5 className="text-sm font-black">Lead -> Qualificado (57% Leakage)</h5>
                <p className="text-xs text-slate-400 font-medium">Tempo de resposta WhatsApp está acima de 10 min.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 text-xl border border-amber-500/20">?</div>
              <div>
                <h5 className="text-sm font-black">Avaliado -> Convertido (30% Leakage)</h5>
                <p className="text-xs text-slate-400 font-medium">Follow-up pós-avaliação não está sendo executado.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sky-500 p-10 rounded-[3rem] text-white flex flex-col justify-center text-center">
          <h4 className="text-3xl font-black tracking-tighter mb-4">LTV (Life Time Value)</h4>
          <p className="text-6xl font-black mb-2">R$ 4.250</p>
          <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Média por paciente fidelizado</p>
        </div>
      </div>
    </div>
  );
};

export default ClientJourneyView;
