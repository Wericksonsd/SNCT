import '../../src/App.css'

export const MtAtlanticaModal = ({ mtAtlanticaLocked, pgtMtAtlantica, rptMtAtlantica, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!mtAtlanticaLocked ? 'mtatlanticaUld' : 'mtatlanticaLkd'} dentroModal`}>
        <h2 className='ttlBioma'>MATA ATLÂNTICA</h2>
        {!mtAtlanticaLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>A Mata Atlântica originalmente cobria mais de 1,3 milhões de km², com vegetação densa e alta umidade. É lar de espécies icônicas como o Mico-Leão-Dourado, onças-pintadas e tucanos. Sua flora inclui orquídeas, araucárias e pau-brasil.</p>
                
                <div className='itemsDesc'>
                    <span className='ttlItem'>ÁREA</span>
                    <span className='descItem'>200.205,3 km2</span>
                </div>

                <div className='itemsDesc'>
                    <span className='ttlItem'>REGIÕES</span>
                    <span className='descItem'>Nordeste, Sudeste e Sul</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtMtAtlantica}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
                onChange={handleInputChange}
                id='respPTN'
                className='iptRespSelector'>
                {rptMtAtlantica.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                )}
                </select>
                <button type='button' onClick={() => handleRespostaEnvio(5)}>ENVIAR</button>
            </form>
            </div>
        )}

        <button onClick={() => handleModal(5)} className='botaoModal'>x</button>
        </div>
    </div>
    );
}
