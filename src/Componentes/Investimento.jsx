import style from '../css/Investimento.module.css'

function Investimento(promps){
    return(
        <div className={style.fundo_investimento}>
            <h2 className={style.titulo_investimento}>
                Um serviço diferenciado para <br/>
                Cada faixa de investimento
            </h2>

            <p className={style.subtitulo_investimento}>
                Conheça as vantagens e benefícios exclusivos para cada tipo de conta
            </p>
        </div>
    )
}


export default Investimento