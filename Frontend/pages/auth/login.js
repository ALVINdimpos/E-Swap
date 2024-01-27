import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/module.css/authenticate.module.css';
import AuthLayout from './layout';
import { getUserFromLocalStorage, setLocalStorageProp_ } from '../../components/localStorage';
import Link from 'next/link';
import { handlePost } from '../../components/data/handleData';
import { AppPages } from '../../components/navigation/page_links';
const Login = ({ setUserDetails, setUserID}) => {
  const [correctUser, setCorrectUser] = useState(false)
  const router = useRouter()
  const [loginError, setLoginError] = useState('');
  const [details, setDetails] = useState({
    email: '', password: ''
  });
  const handleLogin = async () => {
    /*
    const try_login = () => {
      setCorrectUser(true)
      let the_type
      if(details.email.startsWith('seller')){
        the_type = 'seller'
      }else{
        the_type = 'buyer'
      }
      const try_user = { _id: `${the_type}2`, type: the_type, email: details.email }
      setUserDetails(try_user)
      setUserID(try_user._id)
      console.log('login details: ', try_user)
      localStorage.setItem('logged_ECOSWAP_user', JSON.stringify(try_user));
      setLoginError('');
      console.log('trial user that is logging: ', getUserFromLocalStorage('logged_ECOSWAP_user'))
      router.push('/')
    }
    try_login()
    */
    try {
      const response = await handlePost('login', details)
      if (response.status === 200) {
        setLoginError(null)
        setCorrectUser(true)
        const logged_user = {}
        Object.keys(response).map(key => {
          if (key === 'id') {
            logged_user['_id'] = response[key]
          } else {
            logged_user[key] = response[key]
          }
        })
        setLocalStorageProp_('logged_ECOSWAP_user', logged_user)
        setUserDetails(logged_user)
        setUserID(logged_user._id)
        router.push('/')
      } else {
        console.log('error to log in, status:', response.status)
      }
    } catch (error) {
      setLoginError('Invalid email or password');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthLayout page='login'>
      <form id={styles.login}>
        {loginError && <p className={styles.error}>{loginError}</p>}
        {correctUser && <p>Successfull log in</p>}
        <input
          placeholder="Enter Email"
          value={details.email}
          onChange={handleChange}
          name="email"
          type="email"
          autoComplete="current-email"
          required
        />
        <input
          placeholder="Enter Password"
          value={details.password}
          onChange={handleChange}
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <button type="button" onClick={handleLogin}>
          LOGIN
        </button>
        <div className={styles.theLinks}>
          <p><Link href={AppPages.find(page=>page.name === 'Signup').path}>Create Account</Link></p>
          <p><span>Forgot Password? </span></p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
