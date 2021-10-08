import { CSSProperties } from 'react'

export interface CSSStarsProperties extends CSSProperties {
  '--rating': number
}

export type ListingType = {
  id: number | undefined
  userId: number
  isActive: boolean
  listingType: string
  name: string
  description: string
  address: string
  website: string
  phoneNumber: string
  createdDate: Date
  updatedDate: Date
  latitude: number
  longitude: number
  photoURL: string
}

export type NewListingType = {
  id: number | undefined
  userId: number
  isActive: boolean
  listingType: string
  name: string
  description: string
  address: string
  website: string
  phoneNumber: string
  createdDate: Date
  updatedDate: Date
  latitude: number
  longitude: number
  photoURL: string
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

export type LoginUserType = {
  email: string
  password: string
}

export type LoginSuccess = {
  token: string
  user: {
    id: number
    fullName: string
    email: string
  }
}

export type UploadResponse = {
  url: string
}
