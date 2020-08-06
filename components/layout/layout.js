import React, { Fragment } from 'react';
import Router from "next/router";
import NProgress from "nprogress";
import Desktop_Header from '../header/desktop';


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = ({ children }) => {
  return <Fragment>
              <div className="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
                <Desktop_Header />
              </div>
              <div>
                {children}
              </div>
         </Fragment>
}

export default Header;
