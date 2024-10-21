
import { generateRandomName, getRandomLocalAvatar } from '@/lib/random-data';
import { Buzz } from '@/app/creators/[id]/types';

const generateCreatorData = (count: number) => {
    return Array.from({ length: count }, (_, index) => {
      const randomDate = new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      );

      const day = randomDate.getDate();
      const month = randomDate.toLocaleString('en-US', { month: 'long' });
      const year = randomDate.getFullYear();
  
      const daySuffix = (day: number): string => {
        if (day % 10 === 1 && day !== 11) return 'st';
        if (day % 10 === 2 && day !== 12) return 'nd';
        if (day % 10 === 3 && day !== 13) return 'rd';
        return 'th';
      };
  
      const formattedDate = `${month} ${day}${daySuffix(day)}, ${year}`;
  
      // Format the time
      const startHour = Math.floor(Math.random() * 12) + 1; // 1-12
      const startMinute = Math.floor(Math.random() * 60); // 0-59
      const endMinute = startMinute + Math.floor(Math.random() * 3); 
  
      const formatTime = (hour: number, minute: number): string => {
        const period = hour >= 12 ? 'pm' : 'am';
        const formattedHour = hour > 12 ? hour - 12 : hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        return `${formattedHour}:${formattedMinute}${period}`;
      };
  
      const formattedTime = `${formatTime(startHour, startMinute)} - ${formatTime(
        startHour,
        endMinute
      )} PT`;
  
      return {
        id: index + 1,
        name: generateRandomName(),
        avatar: getRandomLocalAvatar(),
        length: `${Math.floor(Math.random() * 60 + 15)} min`,
        price: `$${Math.floor(Math.random() * 100 + 25)}`,
        tip: Math.random() > 0.7 ? 'Yes' : 'No',
        recorded: true,
        total: `$${Math.floor(Math.random() * 150 + 50)}`,
        date: formattedDate,
        time: formattedTime,
        duration: `${Math.floor(Math.random() * 5)} min ${Math.floor(
          Math.random() * 60
        )} seconds`,
        partner: generateRandomName(),
        videoUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
      } as Buzz; 
    });
  };

  export { generateCreatorData };