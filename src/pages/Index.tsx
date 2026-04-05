import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import PopularLocations from '../components/PopularLocations'

const Index:React.FC = () => {
  return (
    <AppLayout>
      <HeroSection/>
      <PopularCategories/>
      <PopularLocations/>
    </AppLayout>
  )
}

export default Index