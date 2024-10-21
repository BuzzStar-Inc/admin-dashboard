import { DashboardLayout as Layout } from '@/components/ui/dashboard-layout';
import { Metadata } from 'next';
import DataView from './fans-dashboard';
export const metadata: Metadata = {
  title: 'BuzzStar | Fans'
};

export default async function PageFans() {
  return (
    <Layout>
      <DataView />
    </Layout>
  );
}
