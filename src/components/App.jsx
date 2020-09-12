import React from 'react';
import Heading from './Heading';
import Image from './Image';
import Buttons from './Buttons';
import randOne from '../catArray';




function App() {
  return (
    <div className="App">
      <Heading />
      <Image 
        img={randOne.url}
      />
      <Buttons />
    </div>
  );
}

export default App;
