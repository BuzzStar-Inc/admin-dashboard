import { Creator } from "@/app/creators/types"
import { getRandomLocalAvatar, generateRandomName } from "@/lib/random-data";


const generateCreatorsData = (count: number): Creator[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${i + 1}`,
      name: generateRandomName(),
      avatar: getRandomLocalAvatar(),
      status: Math.random() > 0.5 ? "Active" : "New Applicant",
      totalEarnings: Math.floor(Math.random() * 10000),
      phoneNumber: `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`,
      socials: `@person${i + 1}`,
    }))
  }
  
  
  export {generateCreatorsData}