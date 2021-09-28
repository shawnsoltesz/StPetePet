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

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}
