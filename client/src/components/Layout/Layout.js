import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children,title,decription,keywords,author }) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={decription} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
        <Header/>
        <main style={{minHeight:"80.5vh"}}>
          <Toaster />
          {children}
        </main>
        <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce app - shop now',
  description: 'mern stack project',
  keywords: 'mern, react, node, mongodb',
  author: 'Pritam',
};

export default Layout;
