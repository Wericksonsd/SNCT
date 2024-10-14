'use client'

import { React, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import './App.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'

import Pantanal from "./assets/pantanalBGcerto.jpg"
import PantanalLocked from "./assets/pantanalLKD.jpg"


function App() {
  
  const [nvlEscolhido, setNivelEscolhido] = useState(0);
  const [pantanalCard, setPantanalCard] = useState(PantanalLocked)

  const [modalNvl, setModalNvl] = useState(true)
  const [modalPtn, setModalPtn] = useState(false)

  const [inputCod, setInputCod] = useState('')
  const [codCorreto, setCodCorreto] = useState(false)


  {/* PERGUNTAS */}
  const [pgtPantanal, setPgtPantanal] = useState('')
  const [rptPantanal, setRptPantanal] = useState('')
  
  const [pgtCaatinga, setPgtCaatinga] = useState('')
  const [pgtAmazonia, setPgtAmazonia] = useState('')
  const [pgtPampa, setPgtPampa] = useState('')
  const [pgtMtAtlantica, setPgtMtAtlantica] = useState('')
  const [pgtCerrado, setPgtCerrado] = useState('')

  const handleNvlEscolha = (val) => {
    setNivelEscolhido(val);    
    setPerguntasNvl(val);
    setModalNvl((x) => !x);
  }

  const setPerguntasNvl = (nivel) => {
    switch(nivel){

      case 1:
        setPgtAmazonia();
        setPgtCaatinga();
        setPgtCerrado();
        setPgtMtAtlantica();
        setPgtPampa();
        setPgtPantanal('QUEM É MANUEL GOMES?');
        break;

      case 2:
        setPgtAmazonia();
        setPgtCaatinga();
        setPgtCerrado();
        setPgtMtAtlantica();
        setPgtPampa();
        setPgtPantanal('TU VIU OS DOIS GORDINHO TE PROCURANDO?');
        break;

      default:
        return 0;
    }
  }

  
  const handleInputChange = (event) => {
    setRptPantanal(event.target.value)
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleClick = () => {
    if(inputCod == 55558){
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
      
      case 2:
        setModalCtg((x) => !x)
      default:
        return 0;
    }
  }

  const handleModalErro = () => {
    setCodCorreto(x => !x)
  }

  return (
    <div className="container">
      <h1 className='tituloBioma'>BUSCA AOS BIOMAS</h1>
      <div className='swiperContainer'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
          <SwiperSlide onClick={() => handleModal(1)}>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(2)}>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pantanalCard} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='insignias'>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>

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
                <h2>{pgtPantanal}</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor="selectOption">{rptPantanal}</label>
                  <select type="text"
                  value={rptPantanal}
                  onChange={() => handleInputChange}
                  maxLength={5}
                  id='respPTN'>
                    <option value="">Selecione...</option>
                    <option value="1">Opção 1</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                  </select>
                  <button type='button' onClick={() => handleClick()}>ENVIAR</button>
                </form>
              </div>
            )}
            
            <button onClick={() => handleModal(1)} className='botaoModal'>x</button>
        </div>
      </div>}

      {modalNvl && <div className='cntModalNvl'>
        <div className='contNivel'>
          <p>ESCOLHA A DIFICULDADE DO PERCURSO:</p>
          <div>
            <button type='button' onClick={() => handleNvlEscolha(1)}>FÁCIL</button>
            <button type='button' onClick={() => handleNvlEscolha(2)}>MÉDIO</button>
          </div>
        </div>
      </div>}

      {codCorreto && <div className='modalErro'>
          <div className='erroContainer'>
            <p>CÓDIGO ERRADO CHEFE</p>
            <button type='button' onClick={() => handleModalErro()}>TENTAR DE NOVO</button>
          </div>
      </div>}
    </div>
  )
}

export default App
