import React from 'react'
import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`
  return (
    <li>
      <h3>
        <Link to={urlForShowingListing}>{props.listing.name}</Link>
      </h3>
      <p>Type: {props.listing.listingType}</p>
      <p>{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
