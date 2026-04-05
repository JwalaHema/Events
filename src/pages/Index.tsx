import React from 'react'
import AppLayout from '../layouts/AppLayout'
import HeroSection from '../components/HeroSection'
import PopularCategories from '../components/PopularCategories'

const Index:React.FC = () => {
  return (
    <AppLayout>
      <HeroSection/>
      <PopularCategories/>
    </AppLayout>
  )
}

export default Index