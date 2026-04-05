import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import PopularLocations from '../components/PopularLocations'
import VendorCategories from '../components/VendorCategories'

const Index:React.FC = () => {
  return (
    <AppLayout>
      <HeroSection/>
      <PopularCategories/>
      <PopularLocations/>
      <VendorCategories/>
    </AppLayout>
  )
}

export default Index