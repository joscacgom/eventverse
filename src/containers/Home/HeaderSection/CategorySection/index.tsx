/* eslint-disable no-unused-vars */
import React, { useState, FC } from 'react'
import { CategoryContainer, CategoryItem } from './styles'

export enum Category {
  Todos = 'Todos',
  Negocios = 'Negocios',
  Musica = 'Musica',
  Deportes = 'Deportes',
  Teatro = 'Teatro',
  Cine = 'Cine',
  Arte = 'Arte',
  Festivales = 'Festivales',
}

type Props = {
  onSelectCategory: (category: Category) => void
}

const CategorySection:FC<Props> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <CategoryContainer data-testid="category-section">
      {Object.values(Category).map((category) => (
        <CategoryItem
          key={category}
          onClick={() => handleCategoryClick(category)}
          selected={category === selectedCategory}
        >
          {category}
        </CategoryItem>
      ))}
    </CategoryContainer>
  )
}

export default CategorySection
