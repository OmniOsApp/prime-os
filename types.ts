
export enum OSStatus {
  OPEN = 'Aberta',
  IN_PROGRESS = 'Em Andamento',
  COMPLETED = 'Concluída',
  CANCELLED = 'Cancelada'
}

export type LeadStatus = 'Lead' | 'Agendado' | 'Em Tratamento' | 'Concluído' | 'Dormente' | 'VIP';

export interface Patient {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  birthDate: string;
  history: string;
  status: LeadStatus;
  interest?: string[];
  source?: string;
  lastContact?: string;
  nextAction?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  time: string;
  duration: number;
  procedure: string;
  status: 'Confirmado' | 'Pendente' | 'Concluído' | 'No-show';
  color: string;
}

// 1. Marketing Strategy Database
export interface MarketingStrategy {
  id: string;
  name: string;
  goal: string;
  primaryOffer: string;
  targetAudience: string;
  painPoint: string;
  promise: string;
  kpi: string;
  status: 'Planejamento' | 'Ativo' | 'Pausado';
}

// 2. Content Hub Database
export interface ContentItem {
  id: string;
  title: string;
  type: 'Blog' | 'Reel' | 'Story' | 'YouTube' | 'Email';
  funnelStage: 'Topo' | 'Meio' | 'Fundo';
  goal: 'Autoridade' | 'Lead' | 'Conversão';
  cta: string;
  status: 'Ideia' | 'Produção' | 'Publicado';
  publishDate?: string;
}

// 4. Campaigns & Funnels Database
export interface Campaign {
  id: string;
  name: string;
  offer: string;
  channel: string;
  status: 'Planejamento' | 'Ativa' | 'Encerrada';
  conversionRate: string;
}

// 6. Metrics & Revenue Database
export interface MarketingMetric {
  date: string;
  leads: number;
  appointments: number;
  conversions: number;
  revenue: number;
  cac: number;
  roi: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'Low Ticket' | 'Mid Ticket' | 'High Ticket' | 'Recorrente';
  price: number;
  description: string;
  indications: string[];
  goal: string;
  cta: string;
  upsellSuggestion: string;
  faq?: { question: string; answer: string }[];
}

export type ViewType = 
  | 'dashboard' 
  | 'patients' 
  | 'crm' 
  | 'activities' 
  | 'infrastructure' 
  | 'revenue' 
  | 'ai-assistant' 
  | 'marketing-hub' 
  | 'clinical-records' 
  | 'settings'
  | 'schedule'
  | 'client-journey'
  | 'sales-playbook'
  | 'pops-sops'
  | 'operations-hub';

export interface ServiceOrder {
  id: string;
  patientId: string;
  dentistId: string;
  date: string;
  status: OSStatus;
  description: string;
  procedures: string[];
  totalValue: number;
}

export interface Dentist {
  id: string;
  name: string;
  specialty: string;
}

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  status: LeadStatus;
  interest: string;
  source: string;
  lastContact: string;
  nextAction: string;
  unit: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  priority: string;
  dueDate: string;
  completed: boolean;
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: string;
  cost: number;
}

export interface ClinicalEntry {
  id: string;
  patientId: string;
  date: string;
  description: string;
  dentistName: string;
}
