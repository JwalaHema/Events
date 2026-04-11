import React from 'react'
import AppLayout from '../layouts/AppLayout'
import RealWeddingsList from '../components/RealWeddingsList'
import Breadcrumbs from '../components/Breadcrumbs'
import { realWeddingBreadcrumb } from '../data/BreadcrumbsData'
import ContactSection from '../components/ContactSection'
import { contactData } from '../data/ContactData'

const RealWeddings = () => {
  return (
    <AppLayout>
      <Breadcrumbs data={realWeddingBreadcrumb} />
     <RealWeddingsList/>
     <ContactSection data={contactData}/>
    </AppLayout>
  )
}

export default RealWeddings