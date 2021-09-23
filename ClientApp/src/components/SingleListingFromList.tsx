import React from 'react'
import { ListingType } from '../types'

export function SingleListingFromList({ listing }: { listing: ListingType }) {
  return (
    <li>
      <h2>{listing.name}</h2>
      <p>Type: {listing.listingType}</p>
      <p>{listing.address}</p>
    </li>
  )
}
