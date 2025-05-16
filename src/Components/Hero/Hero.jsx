import React from 'react'
import './Hero.css'
import { AppContext } from '../../Context/AppContext'

const Hero = () => {

  const { count, setCount, heroData } = useContext(AppContext);

  return (
    <div>
      <h1>Hi vineeth</h1>
    </div>
  )
}

export default Hero
