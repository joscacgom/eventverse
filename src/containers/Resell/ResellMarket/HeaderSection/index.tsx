/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, BackgroundImage, Heading, SpanClip, SpanLiquid } from './styles'
import CategorySection from './CategorySection'
import styled from 'styled-components'

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black1};
  text-align: center;
`

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
        <SpanClip>Marketplace</SpanClip> oficial
        <br />
        para <SpanLiquid>reventas</SpanLiquid>
      </Heading>
      <SubHeading>
        Un lugar seguro donde comprar y vender entradas de reventa
      </SubHeading>
      <CategorySection onSelectCategory={handleSelectCategory} />
    </Container>
  )
}

export default TopSection
