import { ReactNode } from 'react';
import { Icons } from '@/components/ui/icons';

interface MenuItem {
  icon: ReactNode;
  label: string;
  route: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: <Icons.Dashboard className=" m-auto" />,
    label: 'Dashboard',
    route: '/dashboard',
  },
  {
    icon: <Icons.Creators className=" m-auto" />,
    label: 'Creators',
    route: '/creators',
  },
  {
    icon: <Icons.Person className=" m-auto" />,
    label: 'Fans',
    route: '/fans',
  },

  {
    icon: <Icons.Payment className=" m-auto" />,
    label: 'Payments',
    route: '/payments',
  },
];
