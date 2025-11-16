import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLink from './components/SocialLink';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

import Loder from './components/Loder';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      
      clearTimeout(timer);
    };
  }, []);


  return (
    <div>
      {
        loading ? (
           <Loder loading={loading} />
        ) : (
          <>
            <NavBar />
            <SocialLink />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
          </>
        )
      }
    </div>
  )
}

export default App
