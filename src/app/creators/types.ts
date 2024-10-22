
export interface Creator  {
    id: string
    name: string
    avatar: string
    status: 'Active' | 'New Applicant'
    totalEarnings: number
    phoneNumber: string
    socials: string
  }