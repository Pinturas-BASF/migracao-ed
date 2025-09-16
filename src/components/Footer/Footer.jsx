import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import Seller from '../../assets/Juan-Navarro.png'
import igIcon from '../../assets/icons/IconInstagram.svg'

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
                                src={Seller}
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
                <Link to="/politica-privacidad">
                    <p><a rel="noreferrer">Política de Privacidad</a></p>
                </Link>
                <Link to="https://www.instagram.com/basf_ed_ccs/" target='_blank' rel="noopener noreferrer" className={styles.instagram}>
                    <p><a rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-90"><img src={igIcon} alt='Logo de instagram' aria-hidden="true" className='w-5 h-5'/>¡Seguinos en Instagram!</a></p>
                </Link>
            </div>
        </>
    )
}
