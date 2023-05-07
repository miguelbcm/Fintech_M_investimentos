import style from '../css/Pioneiros.module.css'

function Pioneiros(props){
    return(
        <div className={style.fundo_pioneiros}>

            <h4 className={style.titulo_pioneiros}>
                A M Investimentos tem tudo o que você precisa
            </h4>

            <div className={style.caixas}>
                <div className={style.caixa1}>
                    <h4 className={style.titulo_caixa1}>Pioneiros em assessoria</h4>
                    <p className={style.texto_caixa1}>
                        Com a Assesoria da M investimento,<br/>
                        ajudamos as pessoas nas decisões <br/>
                        relacionadas aos seus investimentos,<br/>
                        sempre de acordo com seus objetivos <br/>
                        e perfil.
                    </p>
                </div>

                <div className={style.caixa2}>
                    <h4 className={style.titulo_caixa2}>Desafiamos Padrões</h4>
                    <p className={style.texto_caixa2}>
                        Nosso time de tecnologia antecipa <br/>
                        tendências do mercado, para tornar <br/>
                        a experiência de investir mais simples <br/>
                        e acessivel para todas as pessoas.
                    </p>
                </div>

                <div className={style.caixa3}>
                    <h4 className={style.titulo_caixa3}>Tudo em um lugar</h4>
                    <p className={style.texto_caixa3}>
                    Serviços financeiros a favor dos seus
                    investimentos. Tudo em um só lugar, para
                    quem investe não depender mais dos
                    bancos convencionais.
                    </p>
                </div>

                <div className={style.caixa4}>
                    <h4 className={style.titulo_caixa4}>Rentabilidade</h4>
                    <p className={style.texto_caixa4}>
                    Mais rentabilidade com produtos <br/> 
                    exclusivos e carteira diversificada, <br/>
                    uma conta sob medida para os seus <br/> 
                    objetivos financeiros.
                    </p>
                </div>

                

                
                
            </div>

            
            

        </div>
    )
}


export default Pioneiros