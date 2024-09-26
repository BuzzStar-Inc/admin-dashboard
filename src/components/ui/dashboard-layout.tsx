"use client";
import { useState } from "react";
import Sidebar from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";
import { Avenir } from "@/lib/custom-fonts";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const logOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };
  return (
    <section 
    
    className={`${Avenir.variable} antialiased  bg-background flex h-screen  md:overflow-hidden font-avenir`}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogOut={logOut}
        isLoading={isLoading}
      />
      <div className="relative flex flex-1 flex-col lg:ml-[18.125rem]">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-grow p-6 md:overflow-y-auto lg:pr-12">
          {children}
        </main>
      </div>
    </section>
  );
};

DashboardLayout.displayName = "Dashboard";

export { DashboardLayout };
