'use client'

import { React, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import './App.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'

import { PantanalModal } from './components/Pantanalmodal'
import { CaatingaModal } from './components/Caatingamodal'
import { AmazoniaModal } from './components/Amazoniamodal'
import { PampaModal } from './components/Pampamodal'
import { MtAtlanticaModal } from './components/MtAtlanticamodal'
import { CerradoModal } from './components/Cerradomodal'



function App() {
  
  const [nvlEscolhido, setNivelEscolhido] = useState(0);

  const [modalNvl, setModalNvl] = useState(true)
  const [modalPtn, setModalPtn] = useState(false)
  const [modalCaatinga, setModalCaatinga] = useState(false)
  const [modalAmazonia, setModalAmazonia] = useState(false)
  const [modalPampa, setModalPampa] = useState(false)
  const [modalMtAtlantica, setModalMtAtlantica] = useState(false)
  const [modalCerrado, setModalCerrado] = useState(false)

  const [codCorreto, setCodCorreto] = useState(false)


  {/* PERGUNTAS */}
  const [pgtPantanal, setPgtPantanal] = useState('')
  const [rptPantanal, setRptPantanal] = useState([])
  const [rptCertaPtn, setRptCertaPtn] = useState(0)  
  const [pantanalLocked, setPantanalLocked] = useState(true)
  
  const [pgtCaatinga, setPgtCaatinga] = useState('')  
  const [rptCaatinga, setRptCaatinga] = useState([])
  const [rptCertaCaatinga, setRptCertaCaatinga] = useState(0)  
  const [caatingaLocked, setCaatingaLocked] = useState(true)

  const [pgtAmazonia, setPgtAmazonia] = useState('') 
  const [rptAmazonia, setRptAmazonia] = useState([])
  const [rptCertaAmazonia, setRptCertaAmazonia] = useState(0)
  const [amazoniaLocked, setAmazoniaLocked] = useState(true)
  
  const [pgtPampa, setPgtPampa] = useState('')
  const [rptPampa, setRptPampa] = useState([])
  const [rptCertaPampa, setRptCertaPampa] = useState(0)  
  const [pampaLocked, setPampaLocked] = useState(true)
  
  const [pgtMtAtlantica, setPgtMtAtlantica] = useState('')
  const [rptMtAtlantica, setRptMtAtlantica] = useState([])
  const [rptCertaMtAtlantica, setRptCertaMtAtlantica] = useState(0)  
  const [mtAtlanticaLocked, setMtAtlanticaLocked] = useState(true)

  const [pgtCerrado, setPgtCerrado] = useState('')
  const [rptCerrado, setRptCerrado] = useState([])
  const [rptCertaCerrado, setRptCertaCerrado] = useState(0)  
  const [cerradoLocked, setCerradoLocked] = useState(true)

  const [iptResposta, setIptResposta] = useState('');

  const handleNvlEscolha = (val) => {
    setNivelEscolhido(val);    
    setPerguntasNvl(val);
    setModalNvl((x) => !x);
  }

  const setPerguntasNvl = (nivel) => {
    switch(nivel){

      case 1:
        setPgtPantanal('QUEM É MANUEL GOMES?');
        setRptPantanal([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaPtn(3)

        setPgtCaatinga('Quais regiões do Brasil são mais associadas à Caatinga?');
        setRptCaatinga([{
            id: 1, resposta: 'Sul e Sudeste'
          }, {
            id: 2, resposta: 'Centro-Oeste'
          }, {
            id: 3, resposta: 'Norte e Nordeste'
          }, {
            id: 4, resposta: 'Nordeste'
        }])
        setRptCertaCaatinga(2)

        setPgtAmazonia();
        setRptAmazonia([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaAmazonia(3);

        setPgtPampa();
        setRptPampa([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaPampa(3);

        setPgtMtAtlantica();
        setRptMtAtlantica([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaMtAtlantica(3);

        setPgtCerrado();
        setRptCerrado([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaCerrado(3);   

        break;

      case 2:
        setPgtPantanal('QUEM É MANOEL GOMES?');
        setRptPantanal([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaPtn(3)

        setPgtCaatinga('Quais são as principais adaptações dos cactos da Caatinga para sobreviver no semiárido?');
        setRptCaatinga([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaCaatinga(3)

        setPgtAmazonia();
        setRptAmazonia([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaAmazonia(3);

        setPgtPampa();
        setRptPampa([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaPampa(3);

        setPgtMtAtlantica();
        setRptMtAtlantica([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaMtAtlantica(3);

        setPgtCerrado();
        setRptCerrado([{
            id: 1, resposta: 'Jacaré'
          }, {
            id: 2, resposta: 'Onça Pintada'
          }, {
            id: 3, resposta: 'Tucano'
        }])
        setRptCertaCerrado(3);
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

        case 2:
        if (iptResposta == rptCertaCaatinga){
          setCaatingaLocked(false)
          setModalCaatinga(x => !x)
        } else {
          setCodCorreto(x => !x)
        } break;

        case 3:
        if (iptResposta == rptCertaAmazonia){
          setAmazoniaLocked(false)
          setModalAmazonia(x => !x)
        } else {
          setCodCorreto(x => !x)
        } break;

        case 4:
        if (iptResposta == rptCertaPampa){
          setPampaLocked(false)
          setModalPampa(x => !x)
        } else {
          setCodCorreto(x => !x)
        } break;

        case 5:
        if (iptResposta == rptCertaMtAtlantica){
          setMtAtlanticaLocked(false)
          setModalMtAtlantica(x => !x)
        } else {
          setCodCorreto(x => !x)
        } break;

        case 6:
        if (iptResposta == rptCertaCerrado){
          setCerradoLocked(false)
          setModalCerrado(x => !x)
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
        setModalCaatinga((x) => !x)
        break;

      case 3:
        setModalAmazonia((x) => !x)
        break;

      case 4:
        setModalPampa((x) => !x)
        break;

      case 5:
        setModalMtAtlantica((x) => !x)
        break;

      case 6:
        setModalCerrado((x) => !x)
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
              <div className={`${pantanalLocked ? 'pantanalCardLock' : 'pantanalCardOpen'} cardsContainerInside`}>
                <h2>PANTANAL</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide onClick={() => handleModal(2)}>
            <div className='containerCardsMenores'>
              <div className={`${caatingaLocked ? 'caatingaCardLock' : 'caatingaCardOpen'} cardsContainerInside`}>
                <h2>CAATINGA</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(3)}>
            <div className='containerCardsMenores'>
              <div className={`${amazoniaLocked ? 'amazoniaCardLock' : 'amazoniaCardOpen'} cardsContainerInside`}>
                <h2>AMAZÔNIA</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(4)}>
            <div className='containerCardsMenores'>
              <div className={`${pampaLocked ? 'pampaCardLock' : 'pampaCardOpen'} cardsContainerInside`}>
                <h2>PAMPA</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(5)}>
            <div className='containerCardsMenores'>
              <div className={`${mtAtlanticaLocked ? 'mtatlanticaCardLock' : 'mtatlanticaCardOpen'} cardsContainerInside`}>
                <h2>MATA ATLÂNTICA</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleModal(6)}>
            <div className='containerCardsMenores'>
              <div className={`${cerradoLocked ? 'cerradoCardLock' : 'cerradoCardOpen'} cardsContainerInside`}>
                <h2>CERRADO</h2>
                <p>CLIQUE PARA EXPANDIR</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='insignias'>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>

      {/* PANTANAL */}
      {modalPtn && (        
        <PantanalModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          pantanalLocked={pantanalLocked}
          pgtPantanal={pgtPantanal}
          rptPantanal={rptPantanal}
        />
      )
      }

      {/* CAATINGA */}
      {modalCaatinga && (        
        <CaatingaModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          caatingaLocked={caatingaLocked}
          pgtCaatinga={pgtCaatinga}
          rptCaatinga={rptCaatinga}
        />
      )
      }

      {/* AMAZONIA */}
      {modalAmazonia && (        
        <AmazoniaModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          amazoniaLocked={amazoniaLocked}
          pgtAmazonia={pgtAmazonia}
          rptAmazonia={rptAmazonia}
        />
      )
      }

      {/* PAMPA */}
      {modalPampa && (        
        <PampaModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          pampaLocked={pampaLocked}
          pgtPampa={pgtPampa}
          rptPampa={rptPampa}
        />
      )
      }

      {/* MATA ATLANTICA */}
      {modalMtAtlantica && (        
        <MtAtlanticaModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          mtAtlanticaLocked={mtAtlanticaLocked}
          pgtMtAtlantica={pgtMtAtlantica}
          rptMtAtlantica={rptMtAtlantica}
        />
      )
      }

      {/* CERRADO */}
      {modalCerrado && (        
        <CerradoModal
          handleInputChange={handleInputChange}
          handleModal={handleModal}
          handleRespostaEnvio={handleRespostaEnvio}
          handleSubmit={handleSubmit}
          iptResposta={iptResposta}
          cerradoLocked={cerradoLocked}
          pgtCerrado={pgtCerrado}
          rptCerrado={rptCerrado}
        />
      )
      }

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
