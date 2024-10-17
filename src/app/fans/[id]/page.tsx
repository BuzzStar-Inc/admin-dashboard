import { DashboardLayout as Layout } from "@/components/ui/dashboard-layout";
import FanDashboard from "./fan-dashboard";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzStar | Fan Profile"
};

export default function ProfileView() {
  return (
    <Layout>
      <FanDashboard />
    </Layout>
  );
}
