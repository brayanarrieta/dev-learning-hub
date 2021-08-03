/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
        <Layout >
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </Layout>
    );
  }
  return <a href="/api/auth/login">Login</a>;
};

export default Home;
