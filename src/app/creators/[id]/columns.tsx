import { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Buzz } from './types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CreatorDetailsModal } from './creator-details-modal'

const pastBuzzColumns: ColumnDef<Buzz>[] = [
  {
    accessorKey: 'name',
    header: 'Fan Name',
    cell: ({ row }) => {
      const name = row.getValue('name') as string | undefined // Asegúrate de que TypeScript lo reconozca
      return (
        <div className='flex items-center space-x-2'>
          <Avatar>
            <AvatarImage src={row.original.avatar} alt={name} />
            <AvatarFallback>
              {name
                ? name
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                : '?'}
            </AvatarFallback>
          </Avatar>
          <span>{name}</span>
        </div>
      )
    }
  },

  {
    accessorKey: 'length',
    header: 'Call Length'
  },
  {
    accessorKey: 'price',
    header: 'Price'
  },
  {
    accessorKey: 'tip',
    header: 'Tip'
  },
  {
    accessorKey: 'recorded',
    header: 'Recorded',
    cell: () => (
      <Badge variant='destructive'>
        <span className='bg-destructive-foreground rounded-full w-[9px] h-[9px] mr-1' />
        Recorded
      </Badge>
    )
  },
  {
    accessorKey: 'total',
    header: 'Total'
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const [isModalOpen, setIsModalOpen] = useState(false)

      return (
        <>
          <Button variant='link' size='sm' onClick={() => setIsModalOpen(true)}>
            View
          </Button>
          <CreatorDetailsModal
            buzz={row.original}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </>
      )
    }
  }
]

export { pastBuzzColumns }
