import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy_policy.png"
            alt="privacy policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h5>How We Use Collected Information</h5>
          <p><b>SaleSafari</b> may collect and use Users' personal information for the following purposes:

To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</p>
          <h5>Changes to This Privacy Policy</h5>
          <p><b>SaleSafari</b> has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
    
          <p><b>You accept these Terms by using this Site and signify your acceptance of this policy.</b></p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy;