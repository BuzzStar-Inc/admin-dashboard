import { DashboardLayout as Layout } from "@/components/ui/dashboard-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzStar | Creators",
};

export default async function PageCreators() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold  mb-1">
        Creators
      </h2>
    </Layout>
  );
}
