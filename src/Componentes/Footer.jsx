import style from '../css/Footer.module.css'
import Logo from'../imagens/logo_branco.png'

function Footer(props){
    return(
        <div className={style.footer}>
            <img className={style.logo_footer} src={Logo} alt="logo do footer" />
        </div>
    )
}


export default Footer