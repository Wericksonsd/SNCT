'use client'

import { React, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import './App.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'

import Pantanal from "./assets/pantanalBG.jpg"
import PantanalLocked from "./assets/pantanalLKD.jpg"


function App() {
  
  const [pantanalCard, setPantanalCard] = useState(Pantanal);

  const handleClick = () => setPantanalCard(PantanalLocked)

  return (
    <div className="container">
      <h1>TITULO</h1>
      <Swiper 
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      >
        <SwiperSlide onClick={handleClick}>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pantanalCard} alt="aaaaaa" />
        </SwiperSlide>
      </Swiper>

      <div className='modal'>
        aaaaaaaaaa
      </div>
    </div>
  )
}

export default App
