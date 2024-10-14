import '../../src/App.css';

export const PantanalModal = ({ pantanalLocked, pgtPantanal, rptPantanal, iptResposta, handleInputChange, handleSubmit, handleRespostaEnvio, handleModal }) => {
    return (
    <div className='modal'>
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
