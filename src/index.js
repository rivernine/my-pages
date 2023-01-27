import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//   <ChakraProvider theme={theme}>
//     <React.StrictMode>
//       <Fonts />
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   </ChakraProvider>,
//   document.getElementById('root')
// );
