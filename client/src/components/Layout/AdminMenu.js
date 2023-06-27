import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
        <div className="text-center">
            <div className="list-group dashboard-menu">
                <a href="/dashboard/admin"><h4>Admin Panel</h4></a>
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Edit Profile</NavLink>
                <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
                <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
                <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">Products List</NavLink>
                <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Customer Orders</NavLink>
                {/*<NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>*/}
            </div>
        </div>
    </>
  )
}

export default AdminMenu