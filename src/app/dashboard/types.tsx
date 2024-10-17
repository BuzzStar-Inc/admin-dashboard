

export type TimeRange = "all" | "month" | "year" | "custom";

export type Stat = {
  title: string;
  value: string;
};

export type Creator = {
  name: string;
  phone: string;
  avatar: string;  
  date: Date;
};

export type TopCreator = {
  name: string;
  earnings: string;
  calls: number;
  avatar: string;  
  date: Date;
};


