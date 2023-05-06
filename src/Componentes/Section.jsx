import style from '../css/Section_img.module.css'



function Section(props){
    return(
        <section>
            <p className={style.titulo_section}>
                Na M Investimentos você tem a melhor <br/>
                forma de investir na bolsa.
            </p>

            <p className={style.texto_section}>
                A rentabilidade de uma fintech, com a segurança do <br/>
                M Bank e a proximidade de uma Assessoria <br/>
                Exclusiva para você.
            </p>

            <div className={style.acesse_section}>
                Acesse sua plataforma trading
            </div>

        </section>
    )
}


export default Section