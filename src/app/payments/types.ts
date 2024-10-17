

export type Payment = {
    id: string
    creatorName: string
    creatorAvatar: string
    fanName: string
    fanAvatar: string
    status: "Pending" | "Processed"
    amount: number
    date: string
  }