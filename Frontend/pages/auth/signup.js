import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/module.css/authenticate.module.css';
import AuthLayout from './layout';
import { getUserFromLocalStorage, setLocalStorageProp_ } from '../../components/localStorage';
import Link from 'next/link';
import { handlePost } from '../../components/data/handleData';
import { AppPages } from '../../components/navigation/page_links';
const Signup = ({ setUserDetails, setUserID }) => {
  const [correctUser, setCorrectUser] = useState(false)

  const [signupError, setSignupError] = useState(null);
  const [details, setDetails] = useState({
    name: null, email: null, phone: null, role:null,password: null
  });
  const posting = async () => {
    const { repeatPassword, ...signupDetails } = details;
  
    try {
      const response = await handlePost('register', signupDetails);
  
      if (response.status === 200) {
        const logged_user = Object.keys(response).reduce((user, key) => {
          user[key === 'id' ? '_id' : key] = response[key];
          return user;
        }, {})
        setCorrectUser(true);
        setLocalStorageProp_('logged_ECOSWAP_user', logged_user);
        setUserDetails(logged_user);
        setUserID(logged_user._id);
        setSignupError('Successful Signup');
      } else {
        console.log('Error during signup, status:', response.status);
      }
    } catch (error) {
      setSignupError('Invalid email or password');
      console.error(error);
    }
  };
  
  const handleSignup = async () => {
    const hasMissingFields = Object.values(details).some((value) => !value);
  
    if (hasMissingFields) {
      setSignupError('Missing fields');
      return;
    }
  
    if (details.password !== details.repeatPassword) {
      setSignupError('Passwords do not match');
      return;
    }
  
    await posting();
    setSignupError(null);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Adjust the comparison to make passwords case-insensitive
    if (name === 'password' || name === 'repeatPassword') {
      setDetails((prev) => ({ ...prev, [name]: value.toLowerCase() }));
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  return (
    <AuthLayout page='signup'>
      <form id={styles.signup}>
        {signupError && <p className={styles.error}>{signupError}</p>}
        {correctUser && <p>Account Successfully created</p>}
        <input placeholder="Enter Name" value={details.name} onChange={handleChange}  name="name"
          type="name" required
        />
        <input placeholder="Enter Email" value={details.email} onChange={handleChange}  name="email"
          type="email" autoComplete="current-email" required
        />
        <input placeholder="Enter Phone Number" value={details.phone} onChange={handleChange}  name="phone"
          type="phone" required
        />
        <select onChange={handleChange} value={details.role} name="role" required>
          <option value=''>Type</option>
          <option value='seller'>Seller</option>
          <option value='buyer'>Buyer</option>
        </select>
        <input  placeholder="Enter Password"  value={details.password} onChange={handleChange} name="password"
          type="password" required
        />
        <input  placeholder="Repeat Password"  value={details.repeatPassword} onChange={handleChange} name="repeatPassword"
          type="password" required
        />
        <button type="button" onClick={handleSignup}>
          REGISTER
        </button>
        <div className={styles.theLinks}>
          <p><Link href={AppPages.find(page=>page.name === 'Login').path}>Login</Link> instead</p>
          <p><span>Forgot Password? </span></p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
