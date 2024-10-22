import { DashboardLayout as Layout } from '@/components/ui/dashboard-layout';
import CreatorDashboard from './creator-dashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuzzStar | Creator Profile'
};

export default function ProfileView () {
  return (
    <Layout>
      <CreatorDashboard />
    </Layout>
  );
};
