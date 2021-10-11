import React, { ReactElement } from 'react';
import '../styles/globals.css';

import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
