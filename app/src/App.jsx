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

  const [modalPtn, setModalPtn] = useState(true);

  const handleClick = () => setPantanalCard(PantanalLocked)
  const handleModal = (num) => {
    switch(num){

      case 1:
        setModalPtn((x) => !x)
        break;
      
      default:
        return 0;
    }
  }

  return (
    <div className="container">
      <h1>TITULO</h1>
      <Swiper 
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      >
        <SwiperSlide onClick={() => handleModal(1)}>
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

      {modalPtn && <div className='modal'>
        <div className={`${pantanalCard === Pantanal ? 'pantanalUld' : 'pantanalLkd'} dentroModal`}>
            <h2 className='ttlBioma'>PANTANAL</h2>
            {pantanalCard === Pantanal ? (
              <div>
                <div className='descricaoBiomas'>
                <p>O Pantanal é a maior planície alagada do mundo, localizado principalmente no Brasil, mas também se estendendo pelo Paraguai e Bolívia. Conhecido por sua rica biodiversidade, o Pantanal é um dos ecossistemas mais importantes do planeta.</p>
                
                <div className='itemsDesc'>
                  <span className='ttlItem'>ÁREA</span>
                  <span className='descItem'>884mil km²</span>
                </div>

                <div className='itemsDesc'>
                  <span className='ttlItem'>REGIÕES</span>
                  <span className='descItem'>Norte, Nordeste</span>
                </div>

                <div className='itemsDesc'>
                  <span className='ttlItem'>FAUNA</span>
                  <span className='descItem'>
                    Tatu-Bola <span className='sub'>tatubolaaa</span><br />
                    Tatu-Bola <span className='sub'>tatubolaaa</span><br />
                    Tatu-Bola <span className='sub'>tatubolaaa</span>
                  </span>
                </div>

                <div className='itemsDesc'>
                  <span className='ttlItem'>FLORA</span>
                  <span className='descItem'>
                    Tatu-Bola <span className='sub'>tatubolaaa</span><br />
                    Tatu-Bola <span className='sub'>tatubolaaa</span><br />
                    Tatu-Bola <span className='sub'>tatubolaaa</span>
                  </span>
                </div>

                </div>                
                <div className='coor'></div>
              </div>
            ) : (
              <p> Opa </p>
            )}
            
            <button onClick={() => handleModal(1)} className='botaoModal'>x</button>
        </div>
      </div>}
    </div>
  )
}

export default App
