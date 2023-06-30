import React, { useState, FC } from 'react'
import { CategoryContainer, CategoryItem } from './styles'
import { EventCategory } from '@/models/Events/types'

type Props = {
  onSelectCategory: (category: EventCategory) => void
}

const CategorySection:FC<Props> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>()

  const handleCategoryClick = (category: EventCategory) => {
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <CategoryContainer data-testid="category-section">
      {Object.values(EventCategory).map((category) => (
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
