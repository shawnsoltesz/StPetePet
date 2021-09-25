import React from 'react'

const AdminNav = () => {
  // const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        <nav className="top-nav">
          <ul>
            <li className="nav-button">Home</li>
            <li className="nav-button">About</li>
            <li className="nav-button">Search Listings</li>
            <li>Login</li>
            <li>Create Account</li>
            <li>Create Listing</li>
            <li>Update Listing</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default AdminNav
