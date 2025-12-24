import React from 'react'
import MainCard from '../components/HomeLayout/MainCard'
import ClockCard from '../components/HomeLayout/ClockCard'
import TextCard from '../components/HomeLayout/TextCard'
import '../components/HomeLayout/HomeLayout.css'
import BottonCard from '../components/HomeLayout/BottonCard'



const Home = () => {

  return (
    <div className='home-container'>
      <div className='home-main-container'>
        <MainCard />
        <div className='hame-side-container'>
          <ClockCard />
          <TextCard />
        </div>
      </div>
      <BottonCard />
    </div>
  )

}

export default Home
