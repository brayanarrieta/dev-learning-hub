import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider>
             <Component {...pageProps} />
    </ChakraProvider>
  </UserProvider>
);

export default MyApp
