import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../custom-components/LandingPage/Navbar/Navbar';
import FeaturesGrid from '../custom-components/LandingPage/FeaturesGrid';
import HeroLandingPage from '../custom-components/LandingPage/HeroLandingPage';

const Index = () => {
  const { user } = useUser();
  const isLoggedIn = !!user;

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <HeroLandingPage isLoggedIn={isLoggedIn} />
      <FeaturesGrid />
    </>
  );
};
export default Index;
