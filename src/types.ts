export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  timeSlot: string;
  notes?: string;
  createdAt: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
  flowRate: string;
  averagePrice: string;
}

export interface ACSimulatorState {
  isOn: boolean;
  temperature: number;
  fanSpeed: 'low' | 'medium' | 'high';
  swingOn: boolean;
  mode: 'cooling' | 'ventilation' | 'eco';
}
