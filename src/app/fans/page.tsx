import { DashboardLayout as Layout } from "@/components/ui/dashboard-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzStar | Fans",
};

export default async function PageFans() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold  mb-1">
       Fans
      </h2>
    </Layout>
  );
}
