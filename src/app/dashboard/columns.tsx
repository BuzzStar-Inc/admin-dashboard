import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { Creator, TopCreator } from '@/app/dashboard/types';
import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/constants';

export const creatorColumns: ColumnDef<Creator>[] = [
  {
    accessorKey: 'name',
    header: 'Creators',
    cell: ({ row }) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row.original.avatar}
          alt={`Avatar of ${row.original.name}`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{row.original.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'socials',
    header: 'Socials',
    cell: () => <SocialIcons />
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className="space-x-2">
        <Button variant="link" size="xs">
          View
        </Button>
        <Button variant="action" size="xs">
          Approve
        </Button>
      </div>
    )
  }
];

export const topCreatorColumns: ColumnDef<TopCreator>[] = [
  {
    accessorKey: 'name',
    header: 'Creator',
    cell: ({ row }) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row.original.avatar}
          alt={`Avatar of ${row.original.name}`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{row.original.name}</span>
      </div>
    )
  },
  {
    accessorKey: 'earnings',
    header: 'Earnings'
  },
  {
    accessorKey: 'calls',
    header: 'Calls'
  },
  {
    accessorKey: 'socials',
    header: 'Socials',
    cell: () => <SocialIcons />
  },
  {
    id: 'actions',
    header: 'View',
    cell: () => (
      <Button variant="link" size="xs">
        View
      </Button>
    )
  }
];
