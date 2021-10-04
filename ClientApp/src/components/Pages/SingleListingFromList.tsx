import React from 'react'
import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`
  const listingTypeForShowingIcon = `${props.listing.listingType}`

  switch (listingTypeForShowingIcon) {
    case 'boarding-pet-sitters':
      return <i className="key-icon fas fa-paw"></i>
    case 'dining-drinks':
      return <i className="key-icon fas fa-paw"></i>
    case 'beaches-parks':
      return <i className="key-icon fas fa-dog"></i>
    case 'food-supplies':
      return <i className="key-icon fas fa-shopping-cart"></i>
    case 'for-rent':
      return <i className="key-icon fas fa-home"></i>
    case 'grooming-specialty':
      return <i className="key-icon fas fa-bath"></i>
    case 'pet-adoptions':
      return <i className="key-icon fas fa-heart"></i>
    case 'shopping':
      return <i className="key-icon fas fa-shopping-bag"></i>
    case 'travel':
      return <i className="key-icon fas fa-bed"></i>
    case 'vet':
      return <i className="key-icon fas fa-clinic-medical"></i>
    default:
  }

  return (
    <li className="listing-display">
      <h3 className="listing-heading">
        <Link to={urlForShowingListing}>{props.listing.name}</Link>&nbsp;-&nbsp;
        {listingTypeForShowingIcon}
      </h3>

      <p className="listing-address">{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
