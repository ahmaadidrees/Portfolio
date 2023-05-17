import React from 'react'
import NavBar from '../components/NavBar'
import Details from '../components/Details'
import Footer from '../components/Footer'

const ServicePage = ({isDarkMode, toggleDarkMode}) => {
  return (
    <div>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Details isDarkMode = {isDarkMode} />
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default ServicePage