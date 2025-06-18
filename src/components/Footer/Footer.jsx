import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    // Pega a data atual e coloca em uma variável
    const data = new Date()

    // Pega a ano atual e coloca em uma variável
    const ano = data.getFullYear()


    return (
        <>
            <div className={styles.container}>
                <div className={styles.contato}>
                    <h1>CONTACTO</h1>
                </div>
                <div className={styles.informacoes}>
                    <div className={styles.vendedor}>
                        <div className={styles.imagemvendedor}>
                            <img
                                src="https://promo.basf.com/campaign/Projetos/Melhorias%20Shops/Footer/Regiao/Juan%20Navarro.png"
                                alt="Vendedor basf"
                            />
                        </div>
                        <div className={styles.textovendedor}>
                            <p className={styles.nomeVendedor}>Juan Manuel Navarro</p>
                            <p className={styles.numeroVendedor}><a href="https://web.whatsapp.com/send?phone=541135036369" target="_blank" rel='noreferrer'>+54 11 3503-6369</a></p>
                            <p className={styles.numeroVendedor}><a href="mailto:juan-manuel.navarro@basf.com" target="_blank" rel='noreferrer'>juan-manuel.navarro@basf.com</a></p>
                        </div>
                    </div>
                    <div className={styles.shopbasf}>
                        <div className={styles.boxCinzaEscuro}>
                            <h3>shop@<span className={styles.basf}>BASF</span></h3>
                            <p>en otras industrias:</p>
                            <a href="https://shop.basf.com/" target="_blank" rel='noreferrer'>www.shop.basf.com</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                <p>Copyright © BASF SA {ano}</p>
                <p><a href="/politica-privacidad" rel="noreferrer">Política de Privacidad</a></p>
            </div>
        </>
    )
}
