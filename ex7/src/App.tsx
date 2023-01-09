// import React from 'react';
// import Footer from './components/Footer';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <div className="bg-[#F5F5F5] h-full p-14">
      <div className="mb-10">
        <Navbar />
      </div>
      <Body />
      <div className='mt-[150px]'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


