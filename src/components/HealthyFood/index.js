import React from 'react'

import { MainContainer } from './styled'

import Intro from './components/Intro'
import OurBestRecipes from './components/OurBestRecipes'
import BestServices from './components/BestServices'
import OurBlog from './components/OurBlog'
import Membership from './components/Membership'
import Modal from './components/Modal'

export default function HealthyFood() {
  return (
    <MainContainer>
      <Intro />
      <OurBestRecipes />
      <BestServices />
      <OurBlog />
      <Membership />
      <Modal />
    </MainContainer>
  )
}
