import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import PopularLocations from '../components/PopularLocations'
import VendorCategories from '../components/VendorCategories'
import CalloutSection from '../components/CalloutSection'

const Index:React.FC = () => {
  return (
    <AppLayout>
      <HeroSection/>
      <PopularCategories/>
      <PopularLocations/>
      <VendorCategories/>
      <CalloutSection/>
    </AppLayout>
  )
}

export default Index