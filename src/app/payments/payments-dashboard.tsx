'use client'

import { useState, useEffect, useMemo } from 'react'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { PinBottomIcon, Cross2Icon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Icons } from '@/components/ui/icons'
import { DataTableFilter } from '../../components/table/data-table-filter'
import { DataTableSearch } from '@/components/table/data-table-search'
import { CustomPagination } from '@/components/ui/custom-pagination'
import { Payment } from './types'
import { columnsPayments } from './columns'
import { DataViewToggle } from '@/components/table/data-view-toogle'
import { DataTableView } from '@/components/table/data-table-view'
import { exportToCSV } from '@/lib/csvExport'
import { generatePaymentData } from '@/constants'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

import { PlusIcon } from '@radix-ui/react-icons'
import { DataLoadingSkeleton } from '@/components/table/data-loading-skeleton'
import { DialogNoRows } from '@/components/table/data-dialog-no-rows'

export default function DataView () {
  const [activeTab, setActiveTab] = useState('all')
  const [allData, setAllData] = useState<Payment[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState('')
  const [viewType, setViewType] = useState<'list' | 'grid'>('list')
  const [isLoading, setIsLoading] = useState(true)
  const [showNoSelectionDialog, setShowNoSelectionDialog] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const generatedData = generatePaymentData(100)
      setAllData(generatedData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredData = useMemo(() => {
    if (activeTab === 'all') return allData
    return allData.filter(
      person =>
        person.status.toLowerCase().replace(' ', '') === activeTab.toLowerCase()
    )
  }, [allData, activeTab])

  const table = useReactTable({
    data: filteredData,
    columns: columnsPayments,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 12
      }
    }
  })

  const isFiltered = useMemo(() => {
    return (
      table.getState().columnFilters.length > 0 ||
      table.getState().globalFilter !== ''
    )
  }, [table.getState().columnFilters, table.getState().globalFilter])

  const tabCounts = useMemo(() => {
    return {
      all: allData.length,
      processed: allData.filter(row => row.status === 'Processed').length,
      pending: allData.filter(row => row.status === 'Pending').length
    }
  }, [allData])

  const handleExportCSV = () => {
    exportToCSV(table, {
      fileName: 'selected_payments_export.csv',
      onNoSelection: () => setShowNoSelectionDialog(true)
    })
  }

  const resetFilters = () => {
    table.resetColumnFilters()
    setGlobalFilter('')
  }

  if (isLoading) {
    return (
      <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-semibold mb-6'>Payments</h2>
        <DataLoadingSkeleton />
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-semibold mb-6'>Payments</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
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
            <TabsTrigger value='pending'>
              Pending
              <Badge
                variant={activeTab === 'pending' ? 'secondary' : 'muted'}
                className='ml-1'
              >
                {tabCounts.pending}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value='processed'>
              Processed
              <Badge
                variant={activeTab === 'processed' ? 'secondary' : 'muted'}
                className='ml-1'
              >
                {tabCounts.processed}
              </Badge>
            </TabsTrigger>
          </TabsList>
          <Button className='rounded-full'>
            <PlusIcon className='mr-2' />
            Invite Member
          </Button>
        </div>
        <TabsContent value={activeTab}>
          <div className='flex bg-white items-center p-2 justify-between flex-row flex-wrap gap-2'>
            <div className='flex items-center gap-2'>
              <DataTableSearch
                placeholder='Search...'
                value={globalFilter ?? ''}
                onChange={event => setGlobalFilter(event.target.value)}
                className='max-w-sm w-[312px] h-[2rem]'
              />
              <DataTableFilter
                column={table.getColumn('status')}
                title='Status'
                options={[
                  { label: 'Pending', value: 'Pending' },
                  { label: 'Processed', value: 'Processed' }
                ]}
              />
              <DataTableFilter
                column={table.getColumn('amount')}
                title='Amount'
                options={[
                  { label: '$0 - $1,000', value: '0-1000' },
                  { label: '$1,001 - $5,000', value: '1001-5000' },
                  { label: '$5,001 - $10,000', value: '5001-10000' }
                ]}
              />
              {isFiltered && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={resetFilters}
                  className='h-8 bg-gray-light'
                >
                  Reset
                  <Cross2Icon className='ml-2 h-4 w-4' />
                </Button>
              )}
            </div>
            <div className='flex gap-2'>
              <DataViewToggle viewType={viewType} setViewType={setViewType} />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    className='ml-auto text-sm bg-gray-light text-foreground h-8 hover:bg-gray-light/80'
                  >
                    <Icons.eye className='mr-1' /> Columns
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  {table
                    .getAllColumns()
                    .filter(column => column.getCanHide())
                    .map(column => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className='capitalize'
                          checked={column.getIsVisible()}
                          onCheckedChange={value =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                onClick={handleExportCSV}
                className='ml-2 bg-gray-light text-foreground hover:bg-gray-light/80 h-8'
              >
                <PinBottomIcon className='mr-1 h-auto w-3.5' /> Export
              </Button>
            </div>
          </div>

          <DataTableView
            table={table}
            columns={columnsPayments}
            viewType={viewType}
          />

          <div className='flex-1 text-sm text-muted-foreground mt-2'>
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className='flex items-center justify-between space-x-2 py-4'>
            <CustomPagination
              currentPage={table.getState().pagination.pageIndex + 1}
              totalPages={table.getPageCount()}
              onPageChange={page => table.setPageIndex(page - 1)}
            />
          </div>
        </TabsContent>
      </Tabs>
      <DialogNoRows
        open={showNoSelectionDialog}
        onOpenChange={setShowNoSelectionDialog}
      />
    </div>
  )
}