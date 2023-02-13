import React from 'react';
import * as ReactDOM from 'react-dom/client';

import { ChakraProvider } from "@chakra-ui/react"

import App from './App';
import theme from './theme'
import Fonts from './Fonts'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Fonts />
        <App />
    </React.StrictMode>
  </ChakraProvider>
);
