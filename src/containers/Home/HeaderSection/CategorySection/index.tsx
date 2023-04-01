/* eslint-disable no-unused-vars */
import React from 'react'
import { CategoryContainer, CategoryItem } from './styles'

export enum Category {
    Business = 'Negocios',
    Music = 'Musica',
    Sports = 'Deportes',
    Theater = 'Teatro',
    Film = 'Cine',
    Art = 'Arte',
    Food = 'Comida',
    Festivals = 'Festivales',
}

const CategorySection = () => {
  return (
      <CategoryContainer>
        <CategoryItem>{Category.Festivals}</CategoryItem>
        <CategoryItem>{Category.Business}</CategoryItem>
        <CategoryItem>{Category.Music}</CategoryItem>
        <CategoryItem>{Category.Sports}</CategoryItem>
        <CategoryItem>{Category.Theater}</CategoryItem>
        <CategoryItem>{Category.Film}</CategoryItem>
        <CategoryItem>{Category.Art}</CategoryItem>
        <CategoryItem>{Category.Food}</CategoryItem>
      </CategoryContainer>
  )
}

export default CategorySection
