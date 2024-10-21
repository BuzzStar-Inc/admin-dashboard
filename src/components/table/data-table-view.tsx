import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcons } from '@/constants';
import {
  flexRender,
  ColumnDef,
  Table as TableDef
} from '@tanstack/react-table';

interface DataTableProps {
  table: TableDef<any>;
  columns: ColumnDef<any, any>[];
  viewType: 'list' | 'grid';
}

const DataTableView: React.FC<DataTableProps> = ({
  table,
  columns,
  viewType
}) => {
  if (viewType === 'list') {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-foreground font-bold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-base py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
      {table.getRowModel().rows.map((row) => (
        <div
          key={row.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              {row.original.avatar && (
                  <Image
                    src={row.original.avatar}
                    alt={`Avatar of ${
                      row.original.name
                    }`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                )
                }
      {row.original.fanAvatar && (
                  <Image
                    src={row.original.fanAvatar}
                    alt={`Avatar of ${
                      row.original.fanName
                    }`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                )
                }
              <div>
                <h3 className="text-lg font-semibold">
                  {row.original.name || row.original.fanName}
                </h3>
                <Badge className="bg-blue-light text-blue-dark font-medium gap-1 text-sm py-[1px] hover:bg-blue-light/80">
                  {row.original.status === 'Active' ||
                    (row.original.status === 'Processed' && (
                      <Icons.Verified className="w-4 h-4 mr-1" />
                    ))}
                  {row.original.status}
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              {row.original.totalEarnings && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Earnings:</span> $
                  {row.original.totalEarnings}
                </p>
              )}
                  {row.original.totalSpent && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Total Spent:</span> $
                  {row.original.totalSpent}
                </p>
              )}
                  {row.original.videoCalls && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Video Calls:</span>{' '} 
                  {row.original.videoCalls}
                </p>
              )}
                    {row.original.email && (
             <p className="text-sm text-gray-600">
             <span className="font-medium">Email:</span> {' '}
             {row.original.email}
           </p>
              )}
              {row.original.amount && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Amount:</span> $
                  {row.original.amount}
                </p>
              )}
              {row.original.phoneNumber && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span>{' '}
                  {row.original.phoneNumber}
                </p>
              )}
              {row.original.socials && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 font-medium">
                    Socials:
                  </span>
                  <SocialIcons />
                </div>
              )}
              {row.original.date && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date:</span> {row.original.date}
                </p>
              )}
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <Link
              href={`${
                row.original.socials
                  ? `/creators/${row.original.id}`
                  : row.original.email
                  ? `/fans/${row.original.id}`
                  : '#'
              }`}
            >
              <Button variant="link" size="xs">
                View
              </Button>
            </Link>
            {row.original.status === 'New Applicant' && row.original.socials && (
              <Button variant="action" size="xs">
                Approve
              </Button>
            )}
            {row.original.date && (
              <Button variant="destructive" size="xs">
                Refund
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

DataTableView.displayName = 'DataViewToogle';

export { DataTableView };
