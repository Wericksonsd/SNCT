import '../../src/App.css'

export const PantanalModal = ({ pantanalLocked, pgtPantanal, rptPantanal, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!pantanalLocked ? 'pantanalUld' : 'pantanalLkd'} dentroModal`}>
        <h2 className='ttlBioma'>PANTANAL</h2>
        {!pantanalLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>O Pantanal é a maior planície inundável do mundo, com ciclos anuais de cheia e seca que sustentam sua rica biodiversidade, incluindo onças-pintadas e aves aquáticas. Esse ecossistema é essencial para a preservação de espécies e oferece serviços ambientais valiosos. No entanto, enfrenta ameaças como o desmatamento e a expansão agropecuária.</p>
                
                <div className='itemsDesc'>
                <span className='ttlItem'>ÁREA</span>
                <span className='descItem'>150.355 km² no Brasil</span>
                </div>

                <div className='itemsDesc'>
                <span className='ttlItem'>REGIÕES</span>
                <span className='descItem'>Centro-Oeste</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtPantanal}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
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
    </div>
    );
}
