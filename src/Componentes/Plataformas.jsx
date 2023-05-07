import style from '../css/Plataformas.module.css'
import Celular from '../imagens/celular.png'
import Logo_pequeno from '../imagens/logo_pequeno.png'

function Plataformas(promps){
    return(
        <div className={style.fundo_plataformas}>
            <h2 className={style.titulo_plataforma}>As melhores plataformas de Day trading  para Você</h2>
            <p className={style.subtitulo_plataformas}>
                Tenha recomendações em tempo real dos nossos Analistas e infraestrutura de ponta com Co-location DMA4.
            </p>

            <div className={style.conteudo_plataforma}>
                <div className={style.caixas_traders1}>
                    <div className={style.caixa_trader1}>
                        <h3 className={style.titulo_trader1}>Profit M Trader</h3>
                        <p className={style.texto_trader1}>
                        Análises técnicas de Day Trade, travas <br/> 
                        de gerenciamento de risco e simulador <br/> 
                        de replay de mercado para praticar <br/> 
                        antes de operar.
                        </p>
                        <img className={style.logo_pequeno} src={Logo_pequeno} alt="logo pequeno" />

                    </div>

                    <div className={style.caixa_trader2}>
                    <h3 className={style.titulo_trader1}>Profit M Pro</h3>
                        <p className={style.texto_trader1}>
                            Recursos avançados para a análise <br/>
                            gráfica de ativos. Trace estratégias e<br/> 
                            acompanheo mercado junto com <br/> nossos Analistas.
                        </p>
                        <img className={style.logo_pequeno} src={Logo_pequeno} alt="logo pequeno" />
                        
                    </div>

                </div>

                <img className={style.celular} src={Celular} alt="celular" />

                <div className={style.caixas_traders2}>
                    <div className={style.caixa_trader3}>
                    <h3 className={style.titulo_trader1}>M Trader (Profit Mobile)</h3>
                        <p className={style.texto_trader1}>
                        A Bolsa de Valores no seu celular. São <br/>
                        vários recursos para montar suas <br/>
                        operações e acompanhar cotações de <br/>
                        mercado.
                        </p>
                        <img className={style.logo_pequeno} src={Logo_pequeno} alt="logo pequeno" />

                    </div>

                    <div className={style.caixa_trader4}>
                    <h3 className={style.titulo_trader1}>M smarttbot</h3>
                        <p className={style.texto_trader1}>
                        Robôs investidores usam estatística <br/>
                        para operar de forma automática para você.
                        Ative e opere mensalmente <br/> 5 robôs e
                        tenha isenção na mensalidade.
                        </p>
                        <img className={style.logo_pequeno} src={Logo_pequeno} alt="logo pequeno" />
                        
                    </div>

                </div>

    
            </div>
            
            <div className={style.botoes}>
                <div className={style.ver_todas}>Ver todas as plataformas</div>
                <div className={style.abra_sua}>Sua conta na plataforma</div>
            </div>

        </div>
    )
}


export default Plataformas