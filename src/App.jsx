import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLink from './components/SocialLink'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Loder from './components/Loder'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div>
      {loading ? (
        <Loder />
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
      )}
    </div>
  )
}

export default App
