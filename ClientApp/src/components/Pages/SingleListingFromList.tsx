import React from 'react'
import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`
  const listingTypeForShowingIcon = `${props.listing.listingType}`

  switch (listingTypeForShowingIcon) {
    case 'pet-care':
      return <i className="pet-care-icon fas fa-paw"></i>
    case 'dining':
      return <i className="dining-icon fas fa-utensils"></i>
    case 'recreation':
      return <i className="recreation-icon fas fa-dog"></i>
    case 'shopping':
      return <i className="shopping-icon fas fa-shopping-cart"></i>
    case 'residential':
      return <i className="residential-icon fas fa-home"></i>
    case 'grooming':
      return <i className="grooming-icon fas fa-bath"></i>
    case 'adoptions':
      return <i className="adoptions-icon fas fa-heart"></i>
    case 'vacation':
      return <i className="vacation-icon fas fa-bed"></i>
    case 'medical':
      return <i className="medical-icon fas fa-clinic-medical"></i>
    default:
  }

  return (
    <li className="listing-display">
      <h3 className="listing-heading">
        <Link to={urlForShowingListing} target="_blank">
          {props.listing.name}
        </Link>
        &nbsp;-&nbsp;
        {listingTypeForShowingIcon}
      </h3>

      <p className="listing-address">{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
