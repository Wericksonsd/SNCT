import { React, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import './App.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'

import {EffectCoverflow} from 'swiper/modules'
import { EffectCards } from 'swiper/modules';

import Pantanal from "./assets/pantanalBG.jpg"


function App() {
  

  return (
    <div className="container">
      <h1>TITULO</h1>
      <Swiper 
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      >
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pantanal} alt="aaaaaa" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
