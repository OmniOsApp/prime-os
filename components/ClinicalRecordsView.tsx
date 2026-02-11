
import React, { useState } from 'react';
import { Patient, ClinicalEntry } from '../types';

interface ClinicalRecordsViewProps {
  patients: Patient[];
}

const ClinicalRecordsView: React.FC<ClinicalRecordsViewProps> = ({ patients }) => {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'evolution' | 'terms' | 'surgical'>('evolution');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedPatient = patients.find(p => p.id === selectedPatientId);

  // Mock Clinical Evolution Data
  const clinicalEntries: ClinicalEntry[] = [
    { id: '1', patientId: '1', date: '2023-11-01', description: 'Realizada profilaxia e aplicação de flúor. Paciente relata sensibilidade no dente 26.', dentistName: 'Dr. Ricardo' },
    { id: '2', patientId: '1', date: '2023-10-15', description: 'Início do tratamento ortodôntico. Instalação de alinhadores Invisalign etapa 01.', dentistName: 'Dra. Ana' },
  ];

  const termsTemplates = [
    { id: 't1', name: 'TCLE - Implante Dentário', lastUpdate: 'Jan 2024' },
    { id: 't2', name: 'TCLE - Clareamento Dental', lastUpdate: 'Dez 2023' },
    { id: 't3', name: 'TCLE - Tratamento Ortodôntico (Invisalign)', lastUpdate: 'Fev 2024' },
    { id: 't4', name: 'Termo de Responsabilidade Financeira', lastUpdate: 'Mar 2024' },
  ];

  // Official Data from PDF Guidelines
  const surgicalProtocols = [
    { 
      id: 'p1', 
      name: 'Guia de Orientações Pré-Operatórias', 
      duration: 'Cirurgia prevista: 1:30h - 4:00h',
      sections: [
        { 
          title: 'O que trazer no dia', 
          items: ['Medicamentos prescritos', 'Soro fisiológico (gelado)', 'Gazes para higienização', 'Sorvete e Iogurte (gelados e sem pedaços)'] 
        },
        { 
          title: 'Preparo e Logística', 
          items: ['Chegar com antecedência', 'Comprar insumos antes da cirurgia', 'Obrigatório vir com acompanhante', 'Não dirigir após o procedimento'] 
        },
        { 
          title: 'Alimentação Pré-Operatória', 
          items: ['Café da manhã reforçado (frutas, pão, ovo)', 'Evitar café, álcool e energético nos dias anteriores', 'Almoço leve (arroz, feijão, frango, salada)'] 
        }
      ]
    },
    { 
      id: 'p2', 
      name: 'Recomendações Pós-Operatórias', 
      sections: [
        { 
          title: 'Cuidados com a Ferida e Higiene', 
          items: ['Limpar com soro e gaze (cicatrização)', 'Escovação suave (pouca pasta)', 'NÃO realizar bochechos nem cuspir', 'Raspar língua com cuidado'] 
        },
        { 
          title: 'Sangramento e Repouso', 
          items: ['Gaze firme por 30min se houver sangramento', 'Cabeça elevada (dois travesseiros)', 'Não usar canudo (sucção)', 'Sem exercícios físicos por 14 dias', 'Tossir de boca aberta'] 
        },
        { 
          title: 'Protocolo de Alimentação', 
          items: ['Dieta LÍQUIDA/PASTOSA e FRIA por 7 dias', 'A partir do 4º dia: pastosos mornos', 'Hidratação intensa (sem canudo)', 'Evitar industrializados, sal e açúcar em excesso'] 
        },
        { 
          title: 'Manejo de Inchaço e Trismo', 
          items: ['Gelo nas primeiras 48h (face)', 'Água quente após 48h (desinchar)', 'Exercício de Trismo (língua no céu da boca)', 'Fisioterapia para abrir a boca devagar'] 
        }
      ]
    },
  ];

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.cpf.includes(searchTerm)
  );

  return (
    <div className="space-y-10 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter">Prontuário & Documentos</h2>
          <p className="text-md text-slate-500 font-medium italic">Gestão clínica digital e conformidade legal.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Patient Selection Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Selecionar Paciente</h4>
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 outline-none text-xs focus:ring-2 focus:ring-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
              {filteredPatients.map(p => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedPatientId(p.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    selectedPatientId === p.id ? 'bg-sky-500 text-white border-sky-600 shadow-lg' : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-sm font-bold truncate">{p.name}</p>
                  <p className={`text-[10px] ${selectedPatientId === p.id ? 'text-sky-100' : 'text-slate-400'}`}>CPF: {p.cpf}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clinical Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {!selectedPatient ? (
            <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 p-20 text-center space-y-4 opacity-50">
              <span className="text-6xl">📝</span>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-tighter">Selecione um paciente para visualizar o prontuário</h3>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Header Info */}
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-sky-100 rounded-3xl flex items-center justify-center text-sky-500 text-2xl font-black shadow-inner">
                    {selectedPatient.name[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{selectedPatient.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedPatient.birthDate}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-widest">{selectedPatient.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-sky-600 transition-all">
                    Nova Evolução
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex bg-white p-2 rounded-[2rem] border border-slate-100 shadow-sm gap-2">
                {(['evolution', 'terms', 'surgical'] as const).map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                      activeTab === tab ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {tab === 'evolution' ? 'Evolução Clínica' : tab === 'terms' ? 'Termos & Consentimentos' : 'Protocolos Cirúrgicos'}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'evolution' && (
                  <div className="space-y-6">
                    {clinicalEntries.filter(e => e.patientId === selectedPatientId).map(entry => (
                      <div key={entry.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-sky-200 transition-all group">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-sky-500 bg-sky-50 px-4 py-1 rounded-full uppercase tracking-widest">
                            {new Date(entry.date).toLocaleDateString('pt-BR')}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Assinado por: {entry.dentistName}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">{entry.description}</p>
                      </div>
                    ))}
                    {clinicalEntries.filter(e => e.patientId === selectedPatientId).length === 0 && (
                      <div className="text-center p-20 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 opacity-40">
                         <p className="text-xs font-black uppercase tracking-widest">Nenhuma evolução registrada.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'terms' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {termsTemplates.map(term => (
                      <div key={term.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                        <div>
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-sky-50 transition-all">📄</div>
                          <h4 className="text-md font-black text-slate-800 mb-1 tracking-tighter">{term.name}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Versão: {term.lastUpdate}</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="flex-1 py-3 bg-sky-50 text-sky-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all">Visualizar</button>
                           <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Imprimir / PDF</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'surgical' && (
                  <div className="space-y-10">
                    {surgicalProtocols.map(protocol => (
                      <div key={protocol.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-50 rounded-full -mr-24 -mt-24 group-hover:bg-sky-100 transition-colors"></div>
                        <div className="flex justify-between items-start mb-8 relative z-10">
                          <div>
                            <h4 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                              <span className="w-10 h-10 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500 text-lg">🦷</span>
                              {protocol.name}
                            </h4>
                            {protocol.duration && (
                              <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest mt-2 ml-13">
                                {protocol.duration}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                          {protocol.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                              <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em] border-b border-slate-50 pb-2">
                                {section.title}
                              </h5>
                              <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 p-3 bg-slate-50/50 rounded-2xl border border-slate-100 group-hover:border-sky-100 transition-all">
                                    <div className="w-5 h-5 rounded-full border-2 border-sky-300 flex shrink-0 items-center justify-center text-[10px] text-sky-500 font-black">
                                      {i + 1}
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-10 flex gap-4 relative z-10">
                          <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all shadow-xl shadow-slate-200">
                            Enviar via WhatsApp
                          </button>
                          <button className="px-8 py-4 bg-slate-100 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                            Imprimir Guia
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="bg-sky-50 p-8 rounded-[2.5rem] border border-sky-100 text-center">
                       <p className="text-xs font-bold text-sky-700 italic">"Siga rigorosamente as orientações para garantir o sucesso do seu procedimento. Em caso de dor intensa ou sangramento persistente, entre em contato imediato."</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicalRecordsView;
