import React from 'react';

import '../../styles/fonts.css';
import '../../styles/common.css';

import Intro from '../Intro';
import Specialization from '../Specialization';
import Portfolio from '../Portfolio';
import Reviews from '../Reviews';
import Pricing from '../Pricing';
import Contact from '../Contact';
import Footer from '../Footer';

function App() {
  return (
    <div>
      <Intro />
      <Specialization />
      <Portfolio />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// npm install clsx – для классов
// npm i -D typescript-plugin-css-modules – для работы css modules + ts
