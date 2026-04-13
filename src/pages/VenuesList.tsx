import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ContactSection from '../components/ContactSection'
import { contactData } from '../data/ContactData'
import BreadCrumbs from '../components/Breadcrumbs'
import { venueBreadcrumb } from '../data/BreadcrumbsData'
import PricingSection from '../components/PricingSection'

const VenuesList = () => {
    return (
        <AppLayout>
            <BreadCrumbs data={venueBreadcrumb} />
            <PricingSection/>
            <ContactSection data={contactData} />
        </AppLayout>
    )
}

export default VenuesList