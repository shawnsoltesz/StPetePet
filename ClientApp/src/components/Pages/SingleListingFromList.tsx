import React from 'react'
import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`
  return (
    <li className="listing-display">
      <h3 className="listing-heading">
        <Link to={urlForShowingListing}>{props.listing.name}</Link>&nbsp;-&nbsp;
        {props.listing.listingType} <i className="fas fa-bone"></i>
      </h3>
      {/* <p className="listing-type">Type: {props.listing.listingType}</p> */}
      <p className="listing-address">{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
