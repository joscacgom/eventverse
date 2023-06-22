import React from 'react'
import { Container, BackgroundImage, Heading, SpanClip, SpanLiquid } from './styles'
import CategorySection from './CategorySection'

const TopSection = () => {
  return (
      <Container>
        <BackgroundImage />
        <Heading>Entradas <SpanClip>únicas</SpanClip><br/>eventos <SpanLiquid>inolvidables</SpanLiquid> </Heading>
        <CategorySection data-testid="category-section" />
      </Container>
  )
}

export default TopSection
