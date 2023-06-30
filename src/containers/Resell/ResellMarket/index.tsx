/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import HeaderSection from './HeaderSection'
import MainSection from './MainSection'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <HeaderSection onSelectCategory={handleSelectCategory} />
      <MainSection />
    </>
  )
}

export default Home
