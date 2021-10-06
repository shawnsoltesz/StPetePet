import React from 'react'
// import { Link } from 'react-router-dom'
import { ListingType } from '../../types'

export function SingleListingFromList(props: SingleListingFromListProps) {
  const urlForShowingListing = `/listings/${props.listing.id}`

  function icon(listingTypeForIcon: string) {
    switch (listingTypeForIcon) {
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
  }

  return (
    <li className="listing-display">
      <div className="listings-photo">
        {props.listing.photoURL ? (
          <img alt="Listing Photo" width={200} src={props.listing.photoURL} />
        ) : (
          <img
            src="https://res.cloudinary.com/stpete-pet/image/upload/v1633554229/stpetepet-seal_ew6ltg.png"
            alt="listing photo"
            width="225px"
            height="225px"
          />
        )}
      </div>
      <h3 className="listing-heading">
        {icon(props.listing.listingType)}&nbsp;{props.listing.name}
      </h3>

      <button>
        <a href={urlForShowingListing}>Explore</a>
      </button>
    </li>
  )
}
type SingleListingFromListProps = {
  listing: ListingType
}
