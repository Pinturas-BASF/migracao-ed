import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MobileNavButtons.module.css'

export function MobileNavButtons({ onRegisterClick }) {
    const navigate = useNavigate()
    
    const handleRegisterClick = () => {
        if (onRegisterClick) {
            onRegisterClick();
        } else {    
            navigate('/productos', { 
                state: { abrirFormulario: true } 
            });
        }
    }

    return (
        <div className={styles.mobileButtons}>
            <button onClick={handleRegisterClick}>REGISTRATE AHORA</button>
            <a href="https://my.basf.com/es-ES/" target="_blank" rel="noopener noreferrer">
                <button>ACCEDÉ CON TU USUARIO</button>
            </a>
        </div>
    )
}