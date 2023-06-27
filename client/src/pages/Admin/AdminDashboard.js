import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin Dashboard"}>
        {/*<div className="container-fluid m-3 p-3 dashboard">*/}
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className='col-md-9'>
              <div className='card w-75 p-3 bg-transparent border-0'>
                <h3>Admin Name: <i style={{fontSize: "30px"}}>{auth?.user?.name}</i></h3>
                <h3>Admin Email: <i style={{fontSize: "30px"}}>{auth?.user?.email}</i></h3>
                <h3>Admin Contact: <i style={{fontSize: "30px"}}>{auth?.user?.phone}</i></h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard