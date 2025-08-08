import styles from './webinar.module.css';

const redirectToWebinar = () => {
    window.open("https://events.teams.microsoft.com/event/f1357c80-4623-4cb4-92ed-8b10e0fa6ba1@ecaa386b-c8df-4ce0-ad01-740cbdb5ba55", "_blank");
    }



const BannerWebinar = ({ windowWidth }) => {
    const isMobile = windowWidth < 600;
    return (
        <div className={styles.banner}>
            <div className={styles.data}>
                <div className={styles.header}>
                    <p><strong>21 DE AGOSTO 2025</strong></p>
                    <p>11:00 AM - Argentina  |  10:00 AM - Chile  |  09:00 AM - Colombia</p>
                </div>

                    <div className={styles.title}>
                    {isMobile ? (
                        <>
                        <p>Participá del Webinar de <strong>Modificadores</strong></p>
                        <p><strong>Reológicos de BASF</strong></p>
                        </>
                    ) : (
                        <>
                        <p>Participá del Webinar</p>
                        <p>de <strong>Modificadores</strong></p>
                        <p><strong>Reológicos de BASF</strong></p>
                        </>
                    )}
                    </div>

                <div className={styles.description}>
                    <p>Diseñados para cubrir distintos perfiles de viscosidad</p>
                    <p>en formulaciones de <strong>pinturas arquitectónicas.</strong></p>
                </div>

                <button className={styles.button} onClick={redirectToWebinar}>Registrate en webinar</button>

            </div>
        </div>

    )
}

export default BannerWebinar;