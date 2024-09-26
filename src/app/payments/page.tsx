import { DashboardLayout as Layout } from "@/components/ui/dashboard-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzStar | Payments",
};

export default async function PagePayments() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold  mb-1">
        Payments
      </h2>
    </Layout>
  );
}
