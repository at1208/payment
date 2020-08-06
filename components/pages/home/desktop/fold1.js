import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../../../layout/layout';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { send_otp,verify_otp, authenticate, isAuth } from '../../../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import Router, { useRouter } from 'next/router';


const Fold1 = () => {
const [proceed_btn_click, set_proceed_btn_click] = useState(false);
const [show_spinner, set_show_spinner] = useState();
const [mobile, set_mobile] =  useState('');
const [otp, set_otp] = useState('');
const [session, set_session] = useState('');

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


  const handle_Proceed_button = () => {
        set_show_spinner(true)
        setTimeout(() => {
        set_show_spinner(false)
        set_proceed_btn_click(true)
        }, 1000)
  }

  const handle_Phone_Input = (e) => {
       set_mobile(e.target.value);
  }

  const handle_Otp_Input = (e) => {
       set_otp(e.target.value);
  }


  const phoneInput = () => {
    return <div>
             <TextField
                label="Mobile Number"
                InputProps={{
                   startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                 }}
                variant="outlined"
                className="dk-home-fold1-mobile-input"
                onChange={handle_Phone_Input} />
                <button onClick={SEND_OTP.bind(this, mobile)}>
                  send
                </button>
           </div>
  }


  const otpInput = () => {
    return <div>
              <TextField
                 label="Enter OTP"
                 variant="standard"
                 className="dk-home-fold1-otp-input"
                 onChange={handle_Otp_Input} />
                 <button onClick={VERIFY_OTP.bind(this, {mobile: mobile, otp_input: otp, session_id: session })}>
                   send
                 </button>
           </div>
  }


  const SEND_OTP = (phoneNumber) => {
     send_otp(phoneNumber)
        .then(result => {
          set_session(result.session)
          toast.dark(result.message)
        })
        .catch(error => {
          toast.error(error.error)
        })
  }

  const VERIFY_OTP = (otp) => {
     verify_otp(otp)
        .then(result => {
          toast.dark(result.message)
          authenticate(result, () => {
             Router.push('/')
          })
        })
        .catch(error => {
          toast.error(error.error)
        })
  }


  const Proceed_Button = () => {
    return (
        <div className="dk-home-fold1-button-container">
           {proceed_btn_click &&  phoneInput()}
           {!proceed_btn_click && <button className="dk-home-button" onClick={handle_Proceed_button}>
           {show_spinner && <Spin indicator={antIcon} />}
           {!show_spinner && <span>Proceed to pay</span>}
          </button>}
            {proceed_btn_click && otpInput()}
        </div>
    )
  }




  return <Fragment>
             <div className="dk-home-fold1">
               <ToastContainer />
                <Layout>
                  <div className="dk-home-fold1-inner-container">
                     <div className="row justify-content-center">
                        <div className="col-5 dk-home-fold1-col-1">
                          <h1 className="dk-home-fold1-col-1-title">Get more from your Credit Card</h1>
                          {!isAuth() && Proceed_Button()}
                        </div>
                        <div className="col-5 dk-home-fold1-col-2">
                          <img src="man-credit1.svg" className="dk-home-col-2-img"/>
                        </div>
                     </div>
                  </div>
                </Layout>
             </div>
         </Fragment>
}

export default Fold1;
