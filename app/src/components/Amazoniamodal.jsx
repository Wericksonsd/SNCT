import '../../src/App.css'

export const AmazoniaModal = ({ amazoniaLocked, pgtAmazonia, rptAmazonia, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!amazoniaLocked ? 'amazoniaUld' : 'amazoniaLkd'} dentroModal`}>
        <h2 className='ttlBioma'>AMAZONIA</h2>
        {!amazoniaLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>A Amazônia é o maior bioma do Brasil e uma das florestas tropicais mais biodiversas do mundo, abrigando milhões de espécies e comunidades indígenas. Ela desempenha um papel crucial na regulação do clima global, mas enfrenta ameaças como o desmatamento e a exploração de recursos naturais. Sua preservação é vital para a sustentabilidade ambiental e cultural da região.</p>
                
                <div className='itemsDesc'>
                <span className='ttlItem'>ÁREA</span>
                <span className='descItem'>4.196.943km² no Brasil</span>
                </div>

                <div className='itemsDesc'>
                <span className='ttlItem'>REGIÕES</span>
                <span className='descItem'>Norte</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtAmazonia}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
                onChange={handleInputChange}
                id='respPTN'
                className='iptRespSelector'>
                {rptAmazonia.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                )}
                </select>
                <button type='button' onClick={() => handleRespostaEnvio(3)}>ENVIAR</button>
            </form>
            </div>
        )}

        <button onClick={() => handleModal(3)} className='botaoModal'>x</button>
        </div>
    </div>
    );
}
