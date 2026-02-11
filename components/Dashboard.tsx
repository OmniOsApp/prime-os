
import React from 'react';
import { Patient, ServiceOrder, OSStatus } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  patients: Patient[];
  orders: ServiceOrder[];
}

const Dashboard: React.FC<DashboardProps> = ({ patients, orders }) => {
  const commercialKpis = [
    { label: 'Lead -> Agendamento', value: '68%', icon: '🎯', color: 'bg-sky-50 text-sky-600', desc: 'Meta Franquia: 65%' },
    { label: 'Aceite de Tratamento', value: '74%', icon: '🤝', color: 'bg-emerald-50 text-emerald-600', desc: 'Meta Franquia: 70%' },
    { label: 'Vendas Invisalign', value: '12', icon: '✨', color: 'bg-amber-50 text-amber-600', desc: 'Acima da média' },
  ];

  const chartData = [
    { name: 'Seg', leads: 12, conv: 8 },
    { name: 'Ter', leads: 18, conv: 12 },
    { name: 'Qua', leads: 15, conv: 10 },
    { name: 'Qui', leads: 22, conv: 15 },
    { name: 'Sex', leads: 20, conv: 14 },
    { name: 'Sáb', leads: 10, conv: 6 },
  ];

  return (
    <div className="space-y-12 pb-16">
      <div className="flex justify-between items-end px-2">
        <div>
           <h2 className="text-4xl font-black text-slate-800 tracking-tighter">Painel de Controle</h2>
           <p className="text-slate-500 font-medium">Operacional & Inteligência Prime Odontologia</p>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[11px] font-black text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-widest">Unidade Operacional Ativa</span>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commercialKpis.map((kpi, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col gap-6 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="flex justify-between items-start">
                 <div className={`w-16 h-16 rounded-[1.8rem] ${kpi.color} flex items-center justify-center text-3xl shadow-inner transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                   {kpi.icon}
                 </div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{kpi.desc}</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{kpi.label}</p>
                <h3 className="text-5xl font-black text-slate-800 tracking-tighter">{kpi.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Performance Semanal de Conversão</h3>
              <p className="text-sm text-slate-400 font-medium">Leads captados vs Agendamentos confirmados</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-sky-500"></div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Captação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Conversão</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: '700'}} dy={15} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '20px'}}
                  itemStyle={{fontWeight: '900', fontSize: '13px'}}
                />
                <Area type="monotone" dataKey="leads" stroke="#0ea5e9" strokeWidth={5} fillOpacity={1} fill="url(#colorLeads)" />
                <Area type="monotone" dataKey="conv" stroke="#10b981" strokeWidth={5} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h3 className="text-2xl font-black mb-10 tracking-tight">Status Operacional</h3>
          <div className="space-y-10">
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500 mb-4">
                <span>Tempo de Resposta WhatsApp</span>
                <span className="text-sky-400">4.2 min</span>
              </div>
              <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
                <div className="h-full bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" style={{width: '92%'}} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500 mb-4">
                <span>Faltas (No-Show Rate)</span>
                <span className="text-rose-400">12%</span>
              </div>
              <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
                <div className="h-full bg-rose-500 rounded-full" style={{width: '12%'}} />
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 space-y-6">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight">Scripts Playbook</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Padrão Atualizado</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 text-xl border border-sky-500/20 group-hover:scale-110 transition-transform">📅</div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight">Agenda de Hoje</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">8 Avaliações | 12 Retornos</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
