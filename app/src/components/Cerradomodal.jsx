import '../../src/App.css'

export const CerradoModal = ({ cerradoLocked, pgtCerrado, rptCerrado, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
        <div className={`${!cerradoLocked ? 'cerradoUld' : 'cerradoLkd'} dentroModal`}>
        <h2 className='ttlBioma'>CERRADO</h2>
        {!cerradoLocked ? (
            <div>
            <div className='descricaoBiomas'>
                <p>O Cerrado tem um clima tropical, metade do ano ele é seco e metade do ano é chuvoso, tem uma terra pobre em nutrientes, porém sendo bem rico em alumínio, além de ser uma terra porosa, tendo uma folhagem rasa, ele também é conhecido com savana brasileira.</p>
                
                <div className='itemsDesc'>
                <span className='ttlItem'>ÁREA</span>
                <span className='descItem'>1,5milhão de km²</span>
                </div>

                <div className='itemsDesc'>
                <span className='ttlItem'>REGIÕES</span>
                <span className='descItem'>Centro-oeste</span>
                </div>
            </div>
            <div className='coor'></div>
            </div>
        ) : (
            <div className='containerPergunta'>
            <h2>{pgtCerrado}</h2>
            <form onSubmit={handleSubmit}>
                <select 
                value={iptResposta}
                onChange={handleInputChange}
                id='respPTN'
                className='iptRespSelector'>
                {rptCerrado.map((resp) =>
                    <option key={resp.id} value={resp.id}>{resp.resposta}</option>
                )}
                </select>
                <button type='button' onClick={() => handleRespostaEnvio(6)}>ENVIAR</button>
            </form>
            </div>
        )}

        <button onClick={() => handleModal(6)} className='botaoModal'>x</button>
        </div>
    </div>
    );
}
