import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
        <div className="text-center">
            <div className="list-group dashboard-menu">
                <a href="/dashboard/user"><h4>Dashboard</h4></a>
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Edit Profile</NavLink>
                <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Your Orders</NavLink>
            </div>
        </div>
    </>
  )
}

export default UserMenu