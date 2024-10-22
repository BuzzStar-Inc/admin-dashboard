import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/constants';
import Link from 'next/link';
import { Creator } from './types';

export const columnsCreators: ColumnDef<Creator>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    cell: ({ row }) => (
      <div className="flex items-center space-x-3">
        <Image
          src={row.original.avatar}
          alt={`Avatar of ${row.original.name}`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{row.getValue('name')}</span>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => (
      <Badge className="bg-blue-light text-blue-dark font-medium gap-1 text-sm py-[1px] hover:bg-blue-light/80">
        {row.getValue('status') === 'Active' && <Icons.Verified />}
        {row.getValue('status')}
      </Badge>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: 'totalEarnings',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Total Earnings" />;
    },
    cell: ({ row }) => (
      <div className="text-right max-w-[100px]">
        ${row.getValue('totalEarnings')}
      </div>
    ),
    filterFn: (row, id, value: string[]) => {
      const earnings = row.getValue(id) as number;
      return value.some((range: string) => {
        const [min, max] = range.split('-').map(Number);
        return earnings >= min && earnings <= max;
      });
    }
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Phone Number" />;
    }
  },
  {
    accessorKey: 'socials',
    header: 'Socials',
    cell: () => <SocialIcons />
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="space-x-2">
        <Link href={`/creators/${row.original.id}`}>
          <Button variant="link" size="xs">
            View
          </Button>
        </Link>
        <Button variant="action" size="xs">
          Approve
        </Button>
      </div>
    )
  }
];
