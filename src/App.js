import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import AboutMe from './components/about/AboutMe';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
