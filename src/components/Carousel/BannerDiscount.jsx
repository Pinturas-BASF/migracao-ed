import styles from './bannerdiscount.module.css';

const redirectTo = () => {
    window.open("https://wa.link/zj98oq", "_blank");
    }



const BannerDiscount = () => {
    return (
        <div className={styles.banner} onClick={redirectTo}>

            <div className={styles.logo}></div>
            
            <div className={styles.data}>
            
                <div className={styles.header}>
                    <p>5% DE DESCUENTO</p>
                </div>

                    <div className={styles.title}>
                            <p>En las siguientes soluciones: <strong>Acronal® 295 D, Acronal® RS 723, Acronal® 1568</strong></p>
                            <p><strong>y Dispex® AA 4146.</strong> Promoción válida para el mes de Septiembre.</p>
                    </div>          
                <button className={styles.button} onClick={redirectTo}>Acceder al descuento</button>

            </div>
        </div>

    )
}

export default BannerDiscount;