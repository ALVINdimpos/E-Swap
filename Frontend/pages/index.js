import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LandingPage from './auth/landing';

const Index = ({ userDetails, userId, setUserDetails, setUserID }) => {
  const router = useRouter();
  useEffect(() => {
    console.log('useeffect 1');
    setTimeout(() => {
      console.log("the userDetails: ", userDetails);
      if (userDetails && userId) {
        router.push(`/${userId}`);
        console.log('user found');
      } else {
        console.log('user not found');
        router.push('/auth/login').catch(err => console.error('Router push error:', err));
      }
    }, 2000);
  }, [userDetails,userId, router]);  

  return (
    <>
      <LandingPage/>
    </>
  );
};

export default Index;
