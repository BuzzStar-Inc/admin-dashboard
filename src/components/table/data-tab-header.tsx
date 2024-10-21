import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

interface TabCounts {
  all: number
  active: number
  newApplicant: number
}

interface TabHeaderProps {
  activeTab: string
  tabCounts: TabCounts
}

const DataTabHeader: React.FC<TabHeaderProps> = ({
  activeTab,
  tabCounts
}) => {
  return (
    <div className='flex justify-between'>
      <TabsList className='mb-4'>
        <TabsTrigger value='all'>
          All{' '}
          <Badge
            variant={activeTab === 'all' ? 'secondary' : 'muted'}
            className='ml-1'
          >
            {tabCounts.all}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value='active'>
          Active{' '}
          <Badge
            variant={activeTab === 'active' ? 'secondary' : 'muted'}
            className='ml-1'
          >
            {tabCounts.active}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value='newApplicant'>
          Pending
          <Badge
            variant={activeTab === 'newApplicant' ? 'secondary' : 'muted'}
            className='ml-1'
          >
            {tabCounts.newApplicant}
          </Badge>
        </TabsTrigger>
      </TabsList>
      <Button className='rounded-full'>
        <PlusIcon className='mr-2' />
        Invite Member
      </Button>
    </div>
  );
};

DataTabHeader.displayName = 'DataTabHeader';

export { DataTabHeader };
