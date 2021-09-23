import React from 'react'
import { ListingType } from '../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  return (
    <li>
      <h2>{props.listing.name}</h2>
      <p>Type: {props.listing.listingType}</p>
      <p>{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
