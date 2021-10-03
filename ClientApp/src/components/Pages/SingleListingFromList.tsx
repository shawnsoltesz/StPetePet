import React from 'react'
import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`
  const listingTypeForShowingIcon = `${props.listing.listingType}`

  switch (listingTypeForShowingIcon) {
    case 'Boarding & Pet Sitters':
      return <i className="key-icon fas fa-paw"></i>
    case 'Dining & Drinks':
      return <i className="key-icon fas fa-paw"></i>
    case 'Dog Beaches & Parks':
      return <i className="key-icon fas fa-dog"></i>
    case 'Food & Supplies':
      return <i className="key-icon fas fa-shopping-cart"></i>
    case 'For Rent':
      return <i className="key-icon fas fa-home"></i>
    case 'Grooming & Specialty Services':
      return <i className="key-icon fas fa-bath"></i>
    case 'Pet Adoptions':
      return <i className="key-icon fas fa-heart"></i>
    case 'Shopping':
      return <i className="key-icon fas fa-shopping-bag"></i>
    case 'Travel':
      return <i className="key-icon fas fa-bed"></i>
    case 'Veterinarians':
      return <i className="key-icon fas fa-clinic-medical"></i>
  }

  return (
    <li className="listing-display">
      <h3 className="listing-heading">
        <Link to={urlForShowingListing}>{props.listing.name}</Link> -
        {listingTypeForShowingIcon}
      </h3>

      <p className="listing-address">{props.listing.address}</p>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
