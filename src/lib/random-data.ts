const FIRST_NAMES = [
  'Emma',
  'Chen',
  'Fatima',
  'Dmitri',
  'Zuri',
  'Hiroshi',
  'Astrid',
  'Omar',
  'Priya',
  'Bjorn',
  'Yuki',
  'Kwame',
  'Anastasia',
  'Hassan',
  'Mei',
  'Oluwaseun',
  'Freya',
  'Raj',
  'Natasha',
  'Amira'
]

const LAST_NAMES = [
  'Smith',
  'Zhang',
  'Al-Farsi',
  'Ivanov',
  'Okafor',
  'Tanaka',
  'Andersson',
  'Malik',
  'Sharma',
  'Larsson',
  'Kim',
  'Diallo',
  'Petrov',
  'Gupta',
  'Nilsson',
  'Nguyen',
  'Mensah',
  'Volkov',
  'Singh',
  'Hassan'
]

const LOCAL_AVATARS = [
  '/avatars/1.png',
  '/avatars/2.png',
  '/avatars/3.png',
  '/avatars/4.png',
  '/avatars/5.png',
  '/avatars/6.png',
  '/avatars/7.png',
  '/avatars/8.png',
  '/avatars/9.png',
  '/avatars/10.png',
  '/avatars/11.png',
  '/avatars/12.png'
]

function getRandomElement<T> (array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

const getRandomLocalAvatar = (): string => {
  return getRandomElement(LOCAL_AVATARS)
}

const generateRandomName = (): string => {
  const firstName = getRandomElement(FIRST_NAMES)
  const lastName = getRandomElement(LAST_NAMES)
  return `${firstName} ${lastName}`
}

export const formatCurrency = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`
  } else {
    return `$${amount}`
  }
}

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const generateFormattedPhoneNumber = (): string => {
  const areaCode = '912'
  const secondPart = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')
  const thirdPart = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0')
  return `(${areaCode}) ${secondPart}-${thirdPart}`
}

const generateEmailFromName = (name: string): string => {
  const [firstName] = name.toLowerCase().split(' ')
  const dominio = 'kingtide.com'
  return `${firstName}@${dominio}`
}

function generateRandomDate () {
  const currentYear = new Date().getFullYear()

  const year = Math.floor(Math.random() * 4) + (currentYear - 3)

  const month = Math.floor(Math.random() * 12) + 1

  const daysInMonth = new Date(year, month, 0).getDate()
  const day = Math.floor(Math.random() * daysInMonth) + 1

  const formattedDate =
    (day < 10 ? '0' : '') +
    day +
    '/' +
    (month < 10 ? '0' : '') +
    month +
    '/' +
    year

  return formattedDate
}

export {
  generateRandomName,
  getRandomLocalAvatar,
  generateFormattedPhoneNumber,
  formatNumber,
  generateRandomDate,
  generateEmailFromName
}
