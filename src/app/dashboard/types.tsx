export type TimeRange = 'all' | 'month' | 'year' | 'custom';

export interface Stat  {
  title: string;
  value: string;
};
export interface Creator  {
  name: string;
  phone: string;
  avatar: string;  
  date: Date;
};
export interface TopCreator {
  name: string;
  earnings: string;
  calls: number;
  avatar: string;  
  date: Date;
};