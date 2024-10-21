import { Fan } from '@/app/fans/types';
import {
  getRandomLocalAvatar,
  generateRandomName,
  generateEmailFromName
} from '@/lib/random-data';

const generateFansData = (count: number): Fan[] => {
  return Array.from({ length: count }, (_, i) => {
    const name = generateRandomName();
    return {
      id: `${i + 1}`,
      name: name,
      avatar: getRandomLocalAvatar(),
      status: Math.random() > 0.5 ? 'Active' : 'New Applicant',
      totalSpent: Math.floor(Math.random() * 10000),
      phoneNumber: `${Math.floor(Math.random() * 1000)}-${Math.floor(
        Math.random() * 1000
      )}-${Math.floor(Math.random() * 10000)}`,
      videoCalls: Math.floor(Math.random() * 100) + 1,
      email: generateEmailFromName(name)
    };
  });
};

export { generateFansData };
