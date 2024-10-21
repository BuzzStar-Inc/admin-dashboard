import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Payment } from './types';

export const columnsPayments: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    )
  },
  {
    accessorKey: 'creatorName',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Creator Name' />;
    },
    cell: ({ row }) => (
      <div className='flex items-center space-x-3'>
        <Image
          src={row.original.creatorAvatar}
          alt={`Avatar of ${row.original.creatorName}`}
          width={30}
          height={30}
          className='rounded-full'
        />
        <span>{row.getValue('creatorName')}</span>
      </div>
    )
  },
  {
    accessorKey: 'fanName',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Fan Name' />;
    },
    cell: ({ row }) => (
      <div className='flex items-center space-x-3'>
        <Image
          src={row.original.fanAvatar}
          alt={`Avatar of ${row.original.fanName}`}
          width={30}
          height={30}
          className='rounded-full'
        />
        <span>{row.getValue('fanName')}</span>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Status' />;
    },
    cell: ({ row }) => (
      <Badge className='bg-blue-light text-blue-dark font-medium gap-1 text-sm py-[1px] hover:bg-blue-light/80'>
        {row.original.status === 'Processed' && <Icons.Verified />}

        {row.getValue('status')}
      </Badge>
    ),
    filterFn: (row, id, value) => {
      console.log(row, id, value);
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Amount' />;
    },
    cell: ({ row }) => (
      <div className='text-right max-w-[100px]'>${row.getValue('amount')}</div>
    ),
    filterFn: (row, id, value: string[]) => {
      const spent = row.getValue(id) as number;
      return value.some((range: string) => {
        const [min, max] = range.split('-').map(Number);
        return spent >= min && spent <= max;
      });
    }
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Date' />;
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className='space-x-2'>
        <Button variant='destructive' size='xs'>
          Refund
        </Button>

        <Button variant='link' size='xs'>
          View
        </Button>
      </div>
    )
  }
];
