import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';

import lab from '../../assets/lab-assistant.avif'

export default function Home() {


    return (
        <>
            <Helmet>
                <title>Soluciones para pinturas | Home</title>
            </Helmet>
            <main className={styles.containerHome}>

                <h1 className={styles.homeTitle}>Soluciones BASF para </h1>
                <h2 className={styles.homeSubtitle}>Formular pinturas</h2>

                <div className={styles.mainInfo}>
                    <p>Soluciones BASF para <span className={styles.azul}> Pinturas:</span> La división de negocios de <span className={styles.azul}>Dispersiones, Aditivos y Resinas</span> para la fabricación de pinturas decorativas e industriales de BASF. Estamos atento a las transformaciones y necesidades del mercado, <span className={styles.azul}>buscando la mejor solución para su negocio.</span> Colocamos a su disposición nuestro <span className={styles.azul}>conocimiento técnico y vasta experiencia</span> en el mercado de pinturas para proporcionar <span className={styles.azul}>innovación, desempeño, optimización</span> de costo de las fórmulas, y un proceso de <span className={styles.azul}>fabricación eficiente.</span></p>
                </div>

                <div className={styles.labContainer}>
                    <h3>CONOZCA EL LAB ASSISTANT</h3>
                    <div className={styles.gridLabAssistant}>
                        <div className={styles.infosLab}>
                            <p>Encuentre propuestas de formulaciones y sugerencias para crear sus pinturas arquitectónicas. Haga click en botón, seleccione la opción South America, y regístrese para tener acceso a todo el contenido.</p>
                            <a href="https://www.lab-assistant.basf.com/" target='_blank' rel='noreferrer'>Haga clic aquí</a>
                        </div>
                        <img src={lab} alt="Lab assistant" />
                    </div>
                </div>

            </main >

        </>
    )
}
