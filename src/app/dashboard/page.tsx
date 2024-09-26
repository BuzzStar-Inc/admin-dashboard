import { DashboardLayout as Layout } from "@/components/ui/dashboard-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "BuzzStar | Dashboard",
};

export default async function PageDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold  mb-1">Dashboard</h2>
    </Layout>
  );
}
