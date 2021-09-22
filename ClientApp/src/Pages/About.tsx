import React from 'react'
import seal from '../images/stpetepet/stpetepetDraft.png'

export function About() {
  return (
    <>
      <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              About
            </a>
          </li>
        </ul>
      </nav>
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
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </>
  )
}
