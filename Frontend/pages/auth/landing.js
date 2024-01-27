import React from 'react';
import AuthLayout from './layout';
import { useRouter } from 'next/router';
import { AppPages } from '../../components/navigation/page_links';
const LandingPage = () => {
  const router = useRouter()
  return (
    <AuthLayout loader={'true'} page = 'land'>
      <p>Welcome to ecoSWAP</p>
      <div>
        Sell and buy second hand electronics <br/>
        and their components components</div>         
    </AuthLayout>
  );
};

export default LandingPage;
