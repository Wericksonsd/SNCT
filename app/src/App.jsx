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

  const [modalNvl, setModalNvl] = useState(true)
  const [modalPtn, setModalPtn] = useState(false)

  const [codCorreto, setCodCorreto] = useState(false)


  {/* PERGUNTAS */}
  const [pgtPantanal, setPgtPantanal] = useState('')
  const [rptPantanal, setRptPantanal] = useState([])
  const [rptCertaPtn, setRptCertaPtn] = useState(0)  
  const [pantanalLocked, setPantanalLocked] = useState(true)
  
  const [pgtCaatinga, setPgtCaatinga] = useState('')
  const [pgtAmazonia, setPgtAmazonia] = useState('')
  const [pgtPampa, setPgtPampa] = useState('')
  const [pgtMtAtlantica, setPgtMtAtlantica] = useState('')
  const [pgtCerrado, setPgtCerrado] = useState('')

  const [iptResposta, setIptResposta] = useState('');

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
        setRptPantanal([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaPtn(3)
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
    setIptResposta(event.target.value)
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleRespostaEnvio = (bioma) => {
    switch(bioma){
      
      case 1:
        if (iptResposta == rptCertaPtn){
          setPantanalLocked(false)
          setModalPtn(x => !x)
        } else {
          setCodCorreto(x => !x)
        } break;

      default:
        return 0
  }}

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
            <div className='containerCardsMenores'>
              <div className={`${pantanalLocked ? 'pantanalCardLock' : 'pantanalCardOpen'}`}>
                <h2>PANTANAL</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(2)}>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pantanal} alt="aaaaaa" width="auto" height="700"/>
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
        <div className={`${!pantanalLocked ? 'pantanalUld' : 'pantanalLkd'} dentroModal`}>
            <h2 className='ttlBioma'>PANTANAL</h2>
            {!pantanalLocked ? (
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
                  <select value={iptResposta}
                  onChange={handleInputChange}
                  id='respPTN'
                  className='iptRespSelector'>
                    {rptPantanal.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                  )}
                  </select>
                  <button type='button' onClick={() => handleRespostaEnvio(1)}>ENVIAR</button>
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
            <p>RESPOSTA ERRADA</p>
            <button type='button' onClick={() => handleModalErro()}>TENTAR DE NOVO</button>
          </div>
      </div>}
    </div>
  )
}

export default App
