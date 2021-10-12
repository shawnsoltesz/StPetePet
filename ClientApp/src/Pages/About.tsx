import React from 'react'
import { Link } from 'react-router-dom'
import seal from '../images/stpetepet-seal.png'

export function About() {
  return (
    <>
      <main>
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>
                <Link to="/">&nbsp;Home</Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-info-circle"></i>
                &nbsp;About
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">About</h1>
          <div className="about">
            <div className="seal">
              <img
                src={seal}
                alt="St Pete dot Pet circular seal containing an image of a dog and cat at the beach. Establish 2021"
              />
            </div>
            <div className="description">
              <p>
                <strong>StPete.pet</strong> is a website that celebrates St.
                Petersburg, FL as a city comprised of countless local businesses
                and points of interest that welcomes or caters to pets and their
                humans. We welcome you to join our online community and rely on
                our directory to help you locate some new places and businesses
                you&apos;re seeking for help with everyday needs and services.
                Maybe you&apos;ll even discover some newfound gems where you are
                invited to patronize while out enjoying our beautiful
                surroundings with your pet. Sniff around and explore!
              </p>
              <p>
                We also invite you to connect with us on&nbsp;
                <a
                  className="about-link"
                  href="http://www.facebook.com/stpetepet"
                >
                  Facebook
                </a>
                &nbsp;and&nbsp;
                <a
                  className="about-link"
                  href="http://www.instagram.com/stpetepet"
                >
                  Instagram
                </a>
                . In fact, share your adventures and experiences with our
                community by tagging us <strong>@stpetepet</strong> in your
                photos and posts along with <strong>#PetsWelcomeHere</strong>
              </p>
              <h2>Exploring Our Site</h2>

              <div className="key-types">
                {/* <div className="key-icons">
                  <ul>
                    <li>
                      <i className="adoptions-icon fas fa-heart"></i>
                      &nbsp;Adoptions
                    </li>
                    <li>
                      <i className="dining-icon fas fa-utensils"></i>
                      &nbsp;Dining Out
                    </li>
                    <li>
                      <i className="grooming-icon fas fa-bath"></i>
                      &nbsp;Grooming
                    </li>
                    <li>
                      <i className="medical-icon fas fa-clinic-medical"></i>
                      &nbsp;Medical
                    </li>
                    <li>
                      <i className="pet-care-icon fas fa-paw"></i>&nbsp;Pet Care
                    </li>
                    <li>
                      <i className="recreation-icon fas fa-dog"></i>
                      &nbsp;Recreation
                    </li>
                    <li>
                      <i className="residential-icon fas fa-home"></i>
                      &nbsp;Residential
                    </li>
                    <li>
                      <i className="shopping-icon fas fa-shopping-cart"></i>
                      &nbsp;Shopping
                    </li>
                    <li>
                      <i className="vacation-icon fas fa-bed"></i>&nbsp;Vacation
                    </li>
                  </ul>
                </div> */}
              </div>
              <div>
                <p>
                  Please take note of the icons we use to help identify various
                  businesses and points of interest around town.
                </p>
                <div className="about-icons">
                  <ul>
                    <li>
                      <i className="adoptions-icon fas fa-heart"></i>
                      &nbsp;<strong>Adoptions</strong>&nbsp;&#8211;&nbsp;We
                      believe in adopt, don&apos;t shop! We are committed to
                      help the many animals seeking a their furever home. The
                      next time you&apos;re looking to welcome a new furbaby
                      into your family, please consider adopting one of the pets
                      available through these organizations. Also, please do
                      your part to help the pet overpopulation by spaying and
                      neutering your pet. Check out the fabulous medical
                      providers to help with that simple surgery.
                    </li>
                    <li>
                      <i className="dining-icon fas fa-utensils"></i>
                      &nbsp;&nbsp;<strong>Dining Out</strong>
                      &nbsp;&#8211;&nbsp;This will be a chockful category, but
                      the idea is simple..heading out for some coffee, drinks,
                      or a bit to eat? The local eateries listed would be
                      thrilled to host your pet in their outdoors facilities.
                      When in doubt, check their profile here on StPete.pet,
                      their website or give them a quick call to make sure
                      everyone is comfortable.
                    </li>
                    <li>
                      <i className="grooming-icon fas fa-bath"></i>
                      &nbsp;<strong>Grooming</strong>&nbsp;&#8211;&nbsp;Who
                      doesn&apos;t love a spa day? Pamper your pet with one of
                      the professionals offering grooming services either in
                      their facility, mobile vehicle, or in your home.
                    </li>
                    <li>
                      <i className="medical-icon fas fa-clinic-medical"></i>
                      &nbsp;<strong>Medical</strong>&nbsp;&#8211;&nbsp;Keeping
                      your pet happy and healthy is always a priority. Consider
                      the medical providers listed in this category for routine
                      care as well as specialized services. Again, these are the
                      folks that will gladly help you with spaying or neutering
                      your pet, to help them live a long healthy and happy life.
                    </li>
                    <li>
                      <i className="pet-care-icon fas fa-paw"></i>&nbsp;
                      <strong>Pet Care</strong>&nbsp;&#8211;&nbsp;What do you
                      need help with? We&apos;ve strived to find all of the
                      professionals that will help you with the care for your
                      pets. Are you seeking a dog walker, doggie daycare,
                      in-home pet care or a boarding facility? Look no further
                      than than these fine local businesses. Since some of the
                      providers do not have a physical presence for you to
                      visit, especially if they provide their services in your
                      home, be sure to explore their website or give them a call
                      to learn additional information.
                    </li>
                    <li>
                      <i className="recreation-icon fas fa-dog"></i>
                      &nbsp;<strong>Recreation</strong>&nbsp;&#8211;&nbsp;With
                      all of the sunshine our city boasts, outdoor recreation is
                      plentiful. Grab the beach towels, frisbee, tennis balls,
                      sunblock and please oh please...do not forget the leash!
                    </li>
                    <li>
                      <i className="residential-icon fas fa-home"></i>
                      &nbsp;<strong>Residential</strong>
                      &nbsp;&#8211;&nbsp;We&apos;re scouring the city to find
                      the communities that will gladly welcome your furry family
                      members. Whether you&apos;re new to town, or looking to
                      enjoy a new community with sought after amenities,
                      hopefully you&apos;ll find your new &quot;home sweet
                      home&quot; here.
                    </li>
                    <li>
                      <i className="shopping-icon fas fa-shopping-cart"></i>
                      &nbsp;<strong>Shopping</strong>&nbsp;&#8211;&nbsp;I know,
                      we had you at shopping! This is another chockful category
                      with lots of shopping options. Whether you&apos;re seeking
                      pet food and supplies, gifts for a fellow pet lover, or
                      just a retail establishment that welcomes your pet. Head
                      out for some retail therapy!
                    </li>
                    <li>
                      <i className="vacation-icon fas fa-bed"></i>
                      &nbsp;<strong>Vacation</strong>
                      &nbsp;&#8211;&nbsp;Traveling with your pets can be an
                      amazing time. Like our Residential category, we&apos;ve
                      scoured the community to find pet friendly accommodations
                      to help make your visit to St Petersburg, FL as memorable
                      as possible. We recommend that you give them a call to
                      book your stay and ensure that your pet&apos;s needs will
                      be met to ensure a great trip!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
