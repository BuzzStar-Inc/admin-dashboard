import { Icons } from '@/components/ui/icons'
import { Stat, Creator, TopCreator } from '@/app/dashboard/types'
import {
  generateRandomName,
  getRandomLocalAvatar,
  formatCurrency,
  formatNumber,
  generateFormattedPhoneNumber
} from '@/lib/random-data'

export const SocialIcons: React.FC = () => (
  <div className='flex space-x-2 items-center'>
    <Icons.instagram />
    <Icons.tiktok />
    <Icons.youtube />
    <Icons.snapchat />
  </div>
)

export const generateRandomData = (
  count: number,
  startDate: Date,
  endDate: Date
): [Stat[], Creator[], TopCreator[]] => {
  const STATS: Stat[] = [
    { title: 'Creators', value: formatNumber(Math.floor(Math.random() * 100)) },
    { title: 'Fans', value: formatNumber(Math.floor(Math.random() * 10000)) },
    {
      title: 'Video Calls',
      value: formatNumber(Math.floor(Math.random() * 5000))
    },
    {
      title: 'Payments',
      value: formatCurrency(Math.floor(Math.random() * 10000000))
    },
    {
      title: 'Revenue',
      value: formatCurrency(Math.floor(Math.random() * 1000000))
    }
  ]

  const CREATORS: Creator[] = Array.from({ length: count }, (_, i) => ({
    name: generateRandomName(),
    phone: generateFormattedPhoneNumber(),
    avatar: getRandomLocalAvatar(),
    date: new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    )
  }))

  const TOP_CREATORS: TopCreator[] = Array.from({ length: count }, (_, i) => ({
    name: generateRandomName(),
    earnings: formatCurrency(Math.floor(Math.random() * 100000)),
    calls: Math.floor(Math.random() * 1000),
    avatar: getRandomLocalAvatar(),
    date: new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    )
  }))

  return [STATS, CREATORS, TOP_CREATORS]
}
