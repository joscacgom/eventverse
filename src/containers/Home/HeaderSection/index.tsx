import React from 'react'
import {
  Container,
  BackgroundImage,
  Heading,
  SpanClip,
  SpanLiquid
} from './styles'
import CategorySection from './CategorySection'

type TopSectionProps = {
  onSelectCategory: (category: string) => void
}

const TopSection: React.FC<TopSectionProps> = ({ onSelectCategory }) => {
  const handleSelectCategory = (category: string) => {
    onSelectCategory(category)
  }

  return (
    <Container>
      <BackgroundImage />
      <Heading>
        Entradas <SpanClip>únicas</SpanClip>
        <br />
        eventos <SpanLiquid>inolvidables</SpanLiquid>{' '}
      </Heading>
      <CategorySection onSelectCategory={handleSelectCategory} />
    </Container>
  )
}

export default TopSection
