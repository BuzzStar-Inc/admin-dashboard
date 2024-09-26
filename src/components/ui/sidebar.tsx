"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/constants";
import { Icons } from "@/components/ui/icons";
import ClickOutside from "@/components/ui/click-outside";

interface MenuItem {
  route: string;
  label: string;
  icon: React.ReactNode;
}
interface SidebarItemProps {
  item: MenuItem;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();

  const isActive = (item: MenuItem) => {
    if (item.route === pathname) return true;
  };

  const isItemActive = isActive(item);

  return (
    <li>
      <Link
        href={item.route}
        className={` ${
          isItemActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }  grid grid-cols-3rem-1fr items-center rounded-lg px-4 py-4 font-normal  duration-300 ease-in-out hover:bg-primary`}
      >
        {item.icon}
        {item.label}
      </Link>
    </li>
  );
};

const ToggleButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} aria-controls="sidebar" className="block lg:hidden">
    <svg
      className="fill-current"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
    >
      <path
        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
        fill=""
      />
    </svg>
  </button>
);

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  onLogOut: () => void;
  isLoading: boolean;
}

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  onLogOut,
  isLoading,
}: SidebarProps) => {
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`bg-secondary min-h-screen h-full fixed left-0 top-0 z-20 flex w-[18.125rem] flex-col overflow-y-hidden bg-gray duration-300 ease-linear py-[2.5rem] px-[1.5rem] lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto  flex flex-col justify-between">
          <div className="h-full">
            <div className="flex items-center justify-between gap-2 px-6 pt-0 pb-[3rem]">
              <Link href="/" className="mx-auto">
                <Icons.logo className="w-[10.6875rem] h-auto" />
              </Link>

              <ToggleButton onClick={() => setSidebarOpen(!sidebarOpen)} />
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
              <nav className=" px-4 py-4 lg:px-0 ">
                <ul className="mb-6 flex flex-col gap-1.5">
                  {MENU_ITEMS.map((menuItem, menuIndex) => (
                    <SidebarItem key={menuIndex} item={menuItem} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className=" py-6 lg:py-0">
            <button
              className="text-md text-normal  rounded-lg w-full px-4 py-2 flex  items-center gap-2.5 text-muted-foreground duration-300 ease-in-out  hover:text-primary-foreground"
              onClick={onLogOut}
            >
              <Icons.logout />
              Logout
              {isLoading && (
                <Icons.spinner className="animate-spin mr-2 h-4 w-4 text-blue" />
              )}
            </button>
          </div>

          <div></div>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
