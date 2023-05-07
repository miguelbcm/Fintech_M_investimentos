import style from '../css/Acessorias.module.css'
import No_celular from '../imagens/no_celular.png'

function Acessorias(prompt){
    return(
        <div className={style.fundo_acessorias}>
            <div className={style.acessoria_textos}>
                <div className={style.titulo_acessoria}>
                    Uma Acessoria focada <br/>
                    em alcançar seus <br/>
                    sonhos <br/>
                </div>
                <p className={style.texto_acessoria}>
                    Na M Investimentos você tem uma Assessoria que <br/>
                    entende seus objetivos de vida e planeja <br/>
                    uma jornada financeira junto com você. <br/>
                </p>

                <div className={style.exclusiva}>
                    Quero uma assessoria Exclusiva
                </div>
            </div>
            <div className={style.balao_fala}>
                <div className={style.ola}>Olá, Débora, tudo bem?</div>
                <div className={style.reuniao}>
                    Vamos marcar nossa reunião para <br/>
                    apresentar os resultados da carteira <br/>
                    de investimentos?
                </div>

            </div>
            <img className={style.no_celular} src={No_celular} alt="homem no celular" />

        </div>
    )
}

export default Acessorias