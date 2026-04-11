import React from 'react'
import AppLayout from '../layouts/AppLayout'
import RealWeddingsList from '../components/RealWeddingsList'
import Breadcrumbs from '../components/Breadcrumbs'
import { realWeddingBreadcrumb } from '../data/BreadcrumbsData'

const RealWeddings = () => {
  return (
    <AppLayout>
      <Breadcrumbs data={realWeddingBreadcrumb} />
     <RealWeddingsList/>
    </AppLayout>
  )
}

export default RealWeddings