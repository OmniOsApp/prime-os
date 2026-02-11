
import React, { useState } from 'react';
import { Appointment } from '../types';

const ScheduleView: React.FC = () => {
  const [appointments] = useState<Appointment[]>([
    { id: '1', patientId: 'p1', patientName: 'Ricardo Amaro', time: '09:00', duration: 60, procedure: 'Invisalign Check', status: 'Confirmado', color: 'bg-sky-500' },
    { id: '2', patientId: 'p2', patientName: 'Ana Beatriz', time: '10:30', duration: 45, procedure: 'Limpeza', status: 'Pendente', color: 'bg-emerald-500' },
    { id: '3', patientId: 'p3', patientName: 'Felipe Costa', time: '14:00', duration: 90, procedure: 'Implante Cirúrgico', status: 'Confirmado', color: 'bg-amber-500' },
    { id: '4', patientId: 'p4', patientName: 'Maria Helena', time: '16:00', duration: 30, procedure: 'Avaliação', status: 'Confirmado', color: 'bg-indigo-500' },
  ]);

  const hours = Array.from({ length: 11 }, (_, i) => i + 8); // 8:00 to 18:00

  return (
    <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)]">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-black text-slate-800 tracking-tighter">Agenda Operacional</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Sincronizado: Google Calendar Hub</p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all">Hoje</button>
          <button className="p-2 bg-sky-500 text-white rounded-xl shadow-lg shadow-sky-100">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex gap-4">
        {/* Time Sidebar */}
        <div className="w-16 pt-12 space-y-12">
          {hours.map(hour => (
            <div key={hour} className="text-[10px] font-black text-slate-300 uppercase text-right pr-2">
              {hour}:00
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 relative border-l border-slate-100">
          <div className="absolute inset-0 grid grid-rows-10 divide-y divide-slate-50">
            {hours.map(hour => <div key={hour} className="h-20"></div>)}
          </div>

          {/* Appointments layer */}
          <div className="relative h-full">
            {appointments.map(app => {
              const startHour = parseInt(app.time.split(':')[0]);
              const startMin = parseInt(app.time.split(':')[1]);
              const topPosition = (startHour - 8) * 80 + (startMin / 60) * 80;
              const height = (app.duration / 60) * 80;

              return (
                <div 
                  key={app.id}
                  style={{ top: `${topPosition + 40}px`, height: `${height}px` }}
                  className={`absolute left-4 right-4 ${app.color} p-4 rounded-2xl text-white shadow-xl shadow-black/5 hover:scale-[1.02] transition-all cursor-pointer group`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-[11px] font-black leading-none">{app.time}</p>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full uppercase font-black">{app.status}</span>
                  </div>
                  <h4 className="text-sm font-black truncate">{app.patientName}</h4>
                  <p className="text-[10px] opacity-80 font-bold truncate">{app.procedure}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
