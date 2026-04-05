import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import PopularLocations from '../components/PopularLocations'
import VendorCategories from '../components/VendorCategories'
import CalloutSection from '../components/CalloutSection'
import RealWeddings from '../components/RealWeddings'

const Index:React.FC = () => {
  return (
    <AppLayout>
      <HeroSection/>
      <PopularCategories/>
      <PopularLocations/>
      <VendorCategories/>
      <CalloutSection/>
      <RealWeddings/>
    </AppLayout>
  )
}

export default Index