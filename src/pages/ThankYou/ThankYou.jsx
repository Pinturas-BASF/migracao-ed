import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './thankyou.module.css';

export default function ThankYou() {
  

  return (
    <>
      <Helmet>
        <title>Soluciones para pinturas | Thank You</title>
      </Helmet>
      <main className={styles.container}>
        <h1 className={styles.titulo}>Gracias por su interés en los productos de BASF</h1>
        <p className={styles.subtitulo}>Su formulario ha sido recibido con éxito. En breve, uno de nuestros representantes se pondrá en contacto con usted.</p>
      </main>
    </>
  )
}
