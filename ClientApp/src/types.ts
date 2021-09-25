import { CSSProperties } from 'react'

export interface CSSStarsProperties extends CSSProperties {
  '--rating': number
}

export type ListingType = {
  id: number | undefined
  isActive: boolean
  listingType: string
  name: string
  description: string
  address: string
  website: string
  phoneNumber: string
  createdDate: Date
  updatedDate: Date
}
