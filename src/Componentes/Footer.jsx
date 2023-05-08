import style from '../css/Footer.module.css'
import Logo from'../imagens/logo_branco.png'
import Icone from '../imagens/icones_footer.png'

function Footer(props){
    return(
        <div className={style.footer}>
            <img className={style.logo_footer} src={Logo} alt="logo do footer" />
            <div className={style.footer_investimentos}>
                <h4 className={style.titulo_footer1}>Investimentos</h4>
                <p className={style.texto_footer1}>
                    Renda Fixa e Tesouro <br/>
                    Bolsa de Valores <br/>
                    Fundos de Investimento <br/>
                </p>
            </div>

            <div className={style.footer_empresa}>
                <h4 className={style.titulo_footer2}>Nossa Empresa</h4>
                <p className={style.texto_footer2}>
                    Trabalhe com a gente <br/>
                    Sua Segurança <br/>
                    Nossos Custos    <br/>
                    Agentes Autônomos
                </p>
            </div>

            <div className={style.footer_plataformas}>
                <h4 className={style.titulo_footer3}>Plataformas</h4>
                <p className={style.texto_footer3}>
                    M Trader (Profit) <br/>
                    Profit M Pro <br/>
                    M Trader Mobile    <br/>
                    M Smarttbot
                </p>
            </div>

            <div className={style.footer_duvidas}>
                <h4 className={style.titulo_footer4}>Tire suas dividas</h4>
                <p className={style.texto_footer4}>
                    Central de atendimento <br/>
                    Custos Operacionais <br/>
                    Transferências    <br/>
                    Investimentos
                </p>
            </div>

            <div className={style.footer_icones}>
            <h4 className={style.titulo_footer5}>Redes Sociais</h4>
                <img className={style.icones_footer} src={Icone} alt="icones" />
            </div>
        </div>
    )
}


export default Footer