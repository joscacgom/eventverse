import React from 'react'
import { Container, BackgroundImage, Heading } from './styles'
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
        <Heading>Marketplace oficial<br/>para reventas </Heading>
        <SubHeading>Un lugar seguro donde comprar y vender entradas de reventa</SubHeading>
        <CategorySection />
      </Container>
  )
}

export default TopSection
