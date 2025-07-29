import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

const App = () => {
  const isOwenerPath = useLocation().pathname.includes('owner')
  return (
    <div className='mb-20'>
      {/* Render Navbar only if not on owner path */}
      {!isOwenerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
