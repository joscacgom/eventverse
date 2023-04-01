import React from 'react'
import { Container, BackgroundImage, Heading } from './styles'
import CategorySection from './CategorySection'

const TopSection = () => {
  return (
      <Container>
        <BackgroundImage />
        <Heading>Entradas únicas<br/>eventos inolvidables </Heading>
        <CategorySection />
      </Container>
  )
}

export default TopSection
