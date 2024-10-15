import '../../src/App.css'

export const PampaModal = ({ pampaLocked, pgtPampa, rptPampa, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!pampaLocked ? 'pampaUld' : 'pampaLkd'} dentroModal`}>
        <h2 className='ttlBioma'>PAMPA</h2>
        {!pampaLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>O bioma Pampa, no Rio Grande do Sul, é formado por vastas planícies de gramíneas e clima subtropical. Abriga espécies como o quero-quero e a capivara, sendo importante para pecuária e agricultura. A expansão dessas atividades ameaça sua biodiversidade, exigindo esforços de conservação.</p>
                
                <div className='itemsDesc'>
                <span className='ttlItem'>ÁREA</span>
                <span className='descItem'>176.496km² no Brasil</span>
                </div>

                <div className='itemsDesc'>
                <span className='ttlItem'>REGIÕES</span>
                <span className='descItem'>Sul</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtPampa}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
                onChange={handleInputChange}
                id='respPTN'
                className='iptRespSelector'>
                {rptPampa.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                )}
                </select>
                <button type='button' onClick={() => handleRespostaEnvio(4)}>ENVIAR</button>
            </form>
            </div>
        )}

        <button onClick={() => handleModal(4)} className='botaoModal'>x</button>
        </div>
    </div>
    );
}
