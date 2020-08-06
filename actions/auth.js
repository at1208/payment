import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';

export const send_otp = mobile => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/send/otp`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({mobile})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const verify_otp = data => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/verify/otp`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const signout = next => {
    removeCookie('token');
    removeLocalStorage('credxpay_user');
    next();

    return fetch(`${process.env.NEXT_PUBLIC_API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};



export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};



export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};



export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};



export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};



export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};


export const authenticate = (data, next) => {
  console.log(data)
    setCookie('token', data.token);
    setLocalStorage('credxpay_user', data.result);
    next();
};



export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('credxpay_user')) {
                return JSON.parse(localStorage.getItem('credxpay_user'));
            } else {
                return false;
            }
        }
    }
};
