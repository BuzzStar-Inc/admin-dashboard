import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stat } from './types';

interface StatCardProps {
  stat: Stat
}

export function StatCard ({ stat: { title, value } }: StatCardProps) {
  return (
    <Card className='border-white shadow-transparent py-7 flex flex-col justify-center gap-1 rounded-lg'>
      <CardHeader className='py-2'>
        <CardTitle className='text-2xl lg:text-[2rem] 2xl:text-[3rem] font-normal'>
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent className='py-0'>
        <div className='text-md 2xl:text-[1.25rem] leading-1 font-extrabold text-gray-dark lowercase'>
          {title}
        </div>
      </CardContent>
    </Card>
  );
}
