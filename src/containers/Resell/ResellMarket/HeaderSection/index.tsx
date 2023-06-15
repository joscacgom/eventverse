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
const TopSection = () => {
  return (
      <Container>
        <BackgroundImage />
        <Heading><SpanClip>Marketplace</SpanClip> oficial<br/>para <SpanLiquid>reventas</SpanLiquid> </Heading>
        <SubHeading>Un lugar seguro donde comprar y vender entradas de reventa</SubHeading>
        <CategorySection data-testid="category-section" />
      </Container>
  )
}

export default TopSection
