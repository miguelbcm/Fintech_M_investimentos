import style from '../css/Investimento.module.css'
import Digital from '../imagens/digital.png'
import Demand from '../imagens/on_demand.png'
import Exclusiva from '../imagens/exclusiva_in.png'

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

            <div className={style.imagens_investimentos}>
                <img className={style.digital} src={Digital} alt="tabela digital" />
                <img src={Demand} alt=" tabela on demand" />
                <img src={Exclusiva} alt=" tabela exclusiva" />
            </div>

            <div className={style.saiba_mais}>Saiba mais</div>
        </div>
    )
}


export default Investimento