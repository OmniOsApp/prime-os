
import React, { useState } from 'react';
import { Asset } from '../types';

const InfrastructureView: React.FC = () => {
  const [assets] = useState<Asset[]>([
    { id: '1', name: 'Cadeira Gnatus G3', type: 'Equipamento', status: 'Operacional', cost: 12500 },
    { id: '2', name: 'Rx Periapical', type: 'Equipamento', status: 'Manutenção', cost: 8400 },
    { id: '3', name: 'Compressor de Ar', type: 'Equipamento', status: 'Operacional', cost: 3200 },
    { id: '4', name: 'Kit Anestésico', type: 'Insumo', status: 'Esgotado', cost: 450 },
  ]);

  const getStatusBadge = (s: string) => {
    switch(s) {
      case 'Operacional': return 'bg-emerald-50 text-emerald-600';
      case 'Manutenção': return 'bg-amber-50 text-amber-600';
      default: return 'bg-rose-50 text-rose-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Custo de Ativos</p>
          <h4 className="text-2xl font-black text-slate-800">R$ 24.550</h4>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Manutenções Pendentes</p>
          <h4 className="text-2xl font-black text-amber-600">1 Alerta</h4>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Saúde do Estoque</p>
          <h4 className="text-2xl font-black text-emerald-600">Excelente</h4>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Gestão de Ativos & Recursos</h3>
          <button className="text-sky-500 font-bold text-sm hover:underline">Ver Inventário Completo</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Recurso</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Categoria</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Valor de Aquisição</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assets.map(asset => (
                <tr key={asset.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-slate-800">{asset.name}</p>
                    <p className="text-[11px] text-slate-400">ID: {asset.id.padStart(4, '0')}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-semibold text-slate-600">{asset.type}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusBadge(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-slate-800">R$ {asset.cost.toLocaleString('pt-BR')}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureView;
