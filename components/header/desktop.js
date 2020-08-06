import React, { Fragment } from 'react';
import { isAuth } from '../../actions/auth';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../core/desktop_menu'

const Header = () => {
  return <Fragment>
           <div className="dk-header-outer-container">
            <div className="row">
               <div className="col-8 row">
                    <h1 className="dk-header-logo-title">CredXpay</h1>
                     <div className="ml-5 pt-1">
                     <button className="dk-header-btn">
                        Benefits
                     </button>
                      <button className="dk-header-btn">
                         How it works
                      </button>
                      <button className="dk-header-btn">
                         Testimonials
                      </button>
                      <button className="dk-header-btn">
                         FAQs
                      </button>
                    </div>
               </div>
               <div className="row col-4 justify-content-end">
                  {isAuth() && <button>
                    {isAuth() && isAuth().mobile}
                  </button>}
                  <button className="dk-header-menu-btn-outer">
                    <Menu />
                  </button>
               </div>
            </div>
          </div>
         </Fragment>
}

export default Header;
