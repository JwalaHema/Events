import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'
import PopularLocations from '../components/PopularLocations'
import VendorCategories from '../components/VendorCategories'
import CalloutSection from '../components/CalloutSection'
import Partners from '../components/Partners'
import Blogs from '../components/Blogs'
import RealWeddingsHome from '../components/RealWeddingsHome'

const Index: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <PopularCategories />
      <PopularLocations />
      <VendorCategories />
      <CalloutSection />
      <RealWeddingsHome />
      <Partners />
      <Blogs />
    </AppLayout>
  )
}

export default Index