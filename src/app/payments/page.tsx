import { DashboardLayout as Layout } from '@/components/ui/dashboard-layout';
import { Metadata } from 'next';
import DataView from './payments-dashboard';
export const metadata: Metadata = {
  title: 'BuzzStar | Payments'
};

export default async function PagePayments() {
  return (
    <Layout>
      <DataView />
    </Layout>
  );
}
