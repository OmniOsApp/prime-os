import React, { useState } from 'react';
import { Patient } from '../types';

interface PatientManagementProps {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const PatientManagement: React.FC<PatientManagementProps> = ({ patients, setPatients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    birthDate: '',
    history: ''
  });

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.cpf.includes(searchTerm)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fix: Added missing required 'status' property to satisfy Patient interface
    const patient: Patient = {
      id: Math.random().toString(36).substr(2, 9),
      name: newPatient.name || '',
      cpf: newPatient.cpf || '',
      phone: newPatient.phone || '',
      email: newPatient.email || '',
      birthDate: newPatient.birthDate || '',
      history: newPatient.history || '',
      status: 'Lead'
    };
    setPatients(prev => [...prev, patient]);
    setIsModalOpen(false);
    setNewPatient({ name: '', cpf: '', phone: '', email: '', birthDate: '', history: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative flex-1 max-w-md">
          <input 
            type="text" 
            placeholder="Buscar paciente por nome ou CPF..." 
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-sky-500 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-sky-600 transition-all shadow-lg shadow-sky-100"
        >
          Novo Paciente
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Paciente</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CPF</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contato</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredPatients.map(patient => (
              <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                      {patient.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{patient.name}</p>
                      <p className="text-xs text-slate-400">{patient.birthDate}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{patient.cpf}</td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-600">{patient.phone}</p>
                  <p className="text-xs text-slate-400">{patient.email}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-sky-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPatients.length === 0 && (
          <div className="p-12 text-center text-slate-400">
            Nenhum paciente encontrado.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Novo Cadastro</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500"
                    value={newPatient.name}
                    onChange={e => setNewPatient({...newPatient, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">CPF</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500"
                    value={newPatient.cpf}
                    onChange={e => setNewPatient({...newPatient, cpf: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Celular</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500"
                    value={newPatient.phone}
                    onChange={e => setNewPatient({...newPatient, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500"
                    value={newPatient.email}
                    onChange={e => setNewPatient({...newPatient, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Observações/Histórico</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  value={newPatient.history}
                  onChange={e => setNewPatient({...newPatient, history: e.target.value})}
                ></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-100 transition-colors"
                >
                  Salvar Paciente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientManagement;