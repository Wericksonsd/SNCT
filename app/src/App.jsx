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
  
  const [pantanalPerg, setPantanalPer] = useState();

  const [pantanalCard, setPantanalCard] = useState(PantanalLocked);

  const [modalPtn, setModalPtn] = useState(true);

  const [inputCod, setInputCod] = useState(99999);
  const [codCorreto, setCodCorreto] = useState(false);


  const handleInputChange = (event) => {
    setInputCod(event.target.value);
  };

  const handleSubmit = () => {



  }

  const handleClick = () => {
    if(inputCod == 22013){
      setPantanalCard(Pantanal)
      setModalPtn(x => !x)
    } else {
      setInputCod("")
      setCodCorreto(true)      
    }
  }

  const handleModal = (num) => {
    switch(num){

      case 1:
        setModalPtn((x) => !x)
        break;
      
      default:
        return 0;
    }
  }

  const handleModalErro = () => {
    setCodCorreto(x => !x)
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

      {/* PANTANAL */}
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
              <div className='containerPergunta'>
                <h2>aaaaaaaaa aaaaaaa aaa</h2>
                <form onSubmit={handleSubmit}>
                  <input type="number"
                  placeholder='INSIRA O CÓDIGO'
                  value={inputCod}
                  onChange={handleInputChange}
                  maxLength={5}
                  id='inputPTN' />
                  <button type='button' onClick={() => handleClick()}>ENVIAR</button>
                </form>
              </div>
            )}
            
            <button onClick={() => handleModal(1)} className='botaoModal'>x</button>
        </div>
      </div>}

      {codCorreto && <div className='modalErro'>
          <p>CÓDIGO ERRADO CHEFE</p>
          <button type='button' onClick={() => handleModalErro()}>TENTAR DE NOVO</button>
      </div>}
    </div>
  )
}

export default App
