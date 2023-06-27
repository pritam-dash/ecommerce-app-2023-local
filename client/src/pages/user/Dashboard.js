import React from 'react'
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className='col-md-9'>
              <div className='card w-75 p-3 bg-transparent border-0'>
                <h3>Name: <i style={{fontSize: "30px"}}>{auth?.user?.name}</i></h3>
                <h3>Email: <i style={{fontSize: "30px"}}>{auth?.user?.email}</i></h3>
                <h3>Address: <i style={{fontSize: "30px"}}>{auth?.user?.address}</i></h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
export default Dashboard;