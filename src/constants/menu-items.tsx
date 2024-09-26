import { ReactNode } from "react";
import { Icons } from "@/components/ui/icons";

interface MenuItem {
  icon: ReactNode;
  label: string;
  route: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: <Icons.dashboard className=" m-auto" />,
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: <Icons.creators className=" m-auto" />,
    label: "Creators",
    route: "/creators",
  },
  {
    icon: <Icons.person className=" m-auto" />,
    label: "Fans",
    route: "/fans",
  },

  {
    icon: <Icons.payment className=" m-auto" />,
    label: "Payments",
    route: "/payments",
  },
];
