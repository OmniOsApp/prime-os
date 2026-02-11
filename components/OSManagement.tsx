
import React, { useState } from 'react';
import { ServiceOrder, Patient, Dentist, OSStatus } from '../types';

interface OSManagementProps {
  orders: ServiceOrder[];
  setOrders: React.Dispatch<React.SetStateAction<ServiceOrder[]>>;
  patients: Patient[];
  dentists: Dentist[];
}

const OSManagement: React.FC<OSManagementProps> = ({ orders, setOrders, patients, dentists }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOS, setNewOS] = useState<Partial<ServiceOrder>>({
    patientId: '',
    dentistId: '',
    status: OSStatus.OPEN,
    description: '',
    totalValue: 0,
    procedures: []
  });

  const getPatientName = (id: string) => patients.find(p => p.id === id)?.name || 'N/A';
  const getDentistName = (id: string) => dentists.find(d => d.id === id)?.name || 'N/A';

  const getStatusColor = (status: OSStatus) => {
    switch (status) {
      case OSStatus.OPEN: return 'bg-amber-50 text-amber-600 border-amber-100';
      case OSStatus.IN_PROGRESS: return 'bg-sky-50 text-sky-600 border-sky-100';
      case OSStatus.COMPLETED: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case OSStatus.CANCELLED: return 'bg-slate-50 text-slate-400 border-slate-100';
    }
  };

  const handleCreateOS = (e: React.FormEvent) => {
    e.preventDefault();
    const os: ServiceOrder = {
      id: `OS-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      patientId: newOS.patientId || '',
      dentistId: newOS.dentistId || '',
      date: new Date().toISOString().split('T')[0],
      status: newOS.status || OSStatus.OPEN,
      description: newOS.description || '',
      procedures: newOS.procedures || [],
      totalValue: newOS.totalValue || 0
    };
    setOrders(prev => [os, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">Listagem de OS</h3>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-sky-500 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-sky-600 transition-all shadow-lg shadow-sky-100"
        >
          Criar Nova OS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{order.id}</span>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${getStatusColor(order.status)} uppercase`}>
                {order.status}
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-sky-500 transition-colors">
              {getPatientName(order.patientId)}
            </h4>
            <p className="text-xs font-medium text-slate-500 mb-4">{getDentistName(order.dentistId)}</p>
            
            <div className="space-y-2 mb-6">
              {order.procedures.map((proc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  {proc}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className="text-sm font-bold text-slate-800">R$ {order.totalValue.toLocaleString('pt-BR')}</span>
              <span className="text-xs text-slate-400">{order.date}</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Gerar Nova Ordem de Serviço</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <form onSubmit={handleCreateOS} className="p-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Paciente</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  value={newOS.patientId}
                  onChange={e => setNewOS({...newOS, patientId: e.target.value})}
                >
                  <option value="">Selecione o paciente</option>
                  {patients.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dentista Responsável</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  value={newOS.dentistId}
                  onChange={e => setNewOS({...newOS, dentistId: e.target.value})}
                >
                  <option value="">Selecione o dentista</option>
                  {dentists.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição dos Serviços</label>
                <textarea 
                  required
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                  value={newOS.description}
                  onChange={e => setNewOS({...newOS, description: e.target.value})}
                  placeholder="Ex: Restauração do dente 14 e limpeza geral"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Valor Total (R$)</label>
                  <input 
                    required
                    type="number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    value={newOS.totalValue}
                    onChange={e => setNewOS({...newOS, totalValue: Number(e.target.value)})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Inicial</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    value={newOS.status}
                    onChange={e => setNewOS({...newOS, status: e.target.value as OSStatus})}
                  >
                    <option value={OSStatus.OPEN}>Aberta</option>
                    <option value={OSStatus.IN_PROGRESS}>Em Andamento</option>
                  </select>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-100 transition-all mt-4"
              >
                Gerar OS
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OSManagement;
