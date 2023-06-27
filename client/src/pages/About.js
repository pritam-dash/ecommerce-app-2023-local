import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="about"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At <b>SaleSafari</b>, we believe that shopping should be an enjoyable and convenient experience for everyone. Our mission is to provide a seamless online platform where customers can discover, explore, and purchase a wide range of high-quality products.
          Our team is made up of dedicated professionals who are passionate about what they do. We strive to create an engaging and user-friendly online shopping experience. Whether you're searching for the latest fashion trends, cutting-edge technology, or home essentials, we've got you covered.

We believe in building lasting relationships with our customers. Your satisfaction is our top priority, and we value your trust in us. We continuously improve our processes and listen to your feedback to ensure that we consistently deliver the best possible experience.

Thank you for choosing SaleSafari as your go-to destination for all your shopping needs. We invite you to explore our extensive collection, discover new products, and embark on an exciting shopping journey with us. If you have any questions or need assistance, our friendly customer support team is here to help.
          </p>
          <br/>
          <p>
          Happy shopping!
          </p>
          <p>
The SaleSafari Team
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About;