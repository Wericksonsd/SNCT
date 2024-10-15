import '../../src/App.css'

export const CaatingaModal = ({ caatingaLocked, pgtCaatinga, rptCaatinga, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!caatingaLocked ? 'caatingaUld' : 'caatingaLkd'} dentroModal`}>
        <h2 className='ttlBioma'>CAATINGA</h2>
        {!caatingaLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>A Caatinga é um bioma exclusivo do semiárido brasileiro, caracterizado por vegetação adaptada à seca, como cactos e plantas de folhas espinhosas. Abriga espécies endêmicas, como o calango-de-cauda-lisa e o tatu-bola. Apesar de sua resiliência, a Caatinga enfrenta desafios como a desertificação e a degradação ambiental.</p>
                
                <div className='itemsDesc'>
                <span className='ttlItem'>ÁREA</span>
                <span className='descItem'>844.453 km²</span>
                </div>

                <div className='itemsDesc'>
                <span className='ttlItem'>REGIÕES</span>
                <span className='descItem'>Nordeste, Sudeste</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtCaatinga}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
                onChange={handleInputChange}
                id='respPTN'
                className='iptRespSelector'>
                {rptCaatinga.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                )}
                </select>
                <button type='button' onClick={() => handleRespostaEnvio(2)}>ENVIAR</button>
            </form>
            </div>
        )}

        <button onClick={() => handleModal(2)} className='botaoModal'>x</button>
        </div>
    </div>
    );
}
