import style from '../css/Header.module.css'
import Logo from '../imagens/logo_branco.png'
import Seta from '../imagens/seta.png'

function Header(props){
    return(
        <header>
            <img className={style.logo} src={Logo} alt="logo branco" />
                <div className={style.menus}>
                    <div className={style.home}>Home</div>
                    <div className={style.quem_somos}>Quem Somos</div>
                    <div className={style.fundos}>Fundos</div>
                    <div className={style.trading}>Plataformas</div>
                    <div className={style.aprenda}>Aprenda</div>
                    <div className={style.simulador}>Simulador</div>
                </div>

                <div className={style.acesse}>Acesse sua conta</div>
                <img className={style.seta} src={Seta} alt="seta" />

                <div className={style.abra}>Abra sua conta</div>
            

        </header>
    )
}


export default Header