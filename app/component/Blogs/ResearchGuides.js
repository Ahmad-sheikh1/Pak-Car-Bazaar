import React from 'react'
import Container from '../Container/Container'
import Heading36 from '../Typography/Heading36'
import BlogsCrd2 from '../Cards/BlogsCrd2'
import BasicButton from '../Buttons/BasicButton'
import BuyingGuides from './BuyingGuides'
import CarComparisons from './CarComparisons'

const ResearchGuides = () => {
  return (
    <section className="py-10">
            <Container>
                <Heading36 className="">Car Research Guides</Heading36>
                <BuyingGuides/>
                <CarComparisons/>
            </Container>
        </section >
  )
}

export default ResearchGuides