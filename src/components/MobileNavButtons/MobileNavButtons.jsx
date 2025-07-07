import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MobileNavButtons.module.css'


export function MobileNavButtons() {

    const navigate = useNavigate()

    return (
        <div className={styles.mobileButtons}>
            <button onClick={() => navigate('/productos')}>REGISTRATE AHORA</button>
            <a href="https://my.basf.com/es-ES/" target="_blank" rel="noopener noreferrer">
                <button>ACCEDÉ CON TU USUARIO</button>
            </a>
        </div>
    )

}
