import { DashboardLayout as Layout } from '@/components/ui/dashboard-layout';
import { Metadata } from 'next';
import CreatorsDashboard from './creators-dashboard';

export const metadata: Metadata = {
  title: 'BuzzStar | Creators'
};

export default async function PageCreators() {
  return (
    <Layout>
      <CreatorsDashboard />
    </Layout>
  );
};
