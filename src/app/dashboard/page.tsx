import { DashboardLayout as Layout } from '@/components/ui/dashboard-layout';
import { Metadata } from 'next';
import StatisticsDashboard from '@/app/dashboard/statistics-dashboard';

export const metadata: Metadata = {
  title: 'BuzzStar | Dashboard',
};

export default async function PageDashboard() {
  return (
    <Layout>
      <StatisticsDashboard />
    </Layout>
  );
}