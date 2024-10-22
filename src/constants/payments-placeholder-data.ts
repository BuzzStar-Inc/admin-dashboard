
import { Payment } from '@/app/payments/types';
import { getRandomLocalAvatar, generateRandomName, generateRandomDate } from '@/lib/random-data';

const generatePaymentData = (count: number): Payment[] => {
    return Array.from({ length: count }, (_, i) => {
      const creatorName = generateRandomName();
      const fanName = generateRandomName();
      return {
        id: `${i + 1}`,
        creatorName,
        creatorAvatar: getRandomLocalAvatar(),
        fanName,
        fanAvatar: getRandomLocalAvatar(),
        status: Math.random() > 0.5 ? 'Pending' : 'Processed',
        amount: Math.floor(Math.random() * 10000),
        date: generateRandomDate(),
      };
    });
  };
  
  export {generatePaymentData};