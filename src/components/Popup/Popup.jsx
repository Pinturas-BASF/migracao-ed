    import { useState, useEffect } from "react";
    import './Popup.css'; 
    import personas from './static/img/personas.png';
    import closeIcon from './static/img/trailing-icon-button.svg';

    const Popup = () => {
        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
            setIsOpen(true);
        }, []);

        const closePopup = () => {
            setIsOpen(false);
        }

        const redirectToWebinar = () => {
            window.open("https://events.teams.microsoft.com/event/f1357c80-4623-4cb4-92ed-8b10e0fa6ba1@ecaa386b-c8df-4ce0-ad01-740cbdb5ba55", "_blank");
            closePopup();
        }

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="Logo__">
                    
                </div>
                <div className="close__"></div>
                    <button onClick={closePopup} className="close-button">
                        <img src={closeIcon} alt="Cerrar popup" />
                    </button>
            <div className="text__">

                <div className="titulos_webinar">
                    <div className="titulo_webinar">
                        <p>WEBINAR</p>
                    </div>
                    <div className="subtitulo_webinar">
                        <p>Modificadores Reológicos de BASF</p>
                    </div>
                </div>
                <div className="info__">
                    <p>Te invitamos a un <strong>webinar técnico exclusivo</strong> donde presentaremos el portafolio completo de <strong>Modificadores Reológicos de BASF</strong>, diseñados para cubrir distintos perfiles de viscosidad en formulaciones de pinturas arquitectónicas.</p>
                </div>
            </div>

            <div class="componente-personas">
                <div className="images__">
                    <img src={personas} alt="Personas" className="img-personas" />
                </div>
                <div className="info marlon">
                    <strong>Marlon Braidott</strong><br />
                    Consultor Técnico Aditivos
                </div>
            
                <div className="info dario">
                    <strong><p>Dario Narbona</p></strong>
                    <p>Gerente Técnico</p>
                    <p>Coatings & Construction</p>
                </div>
            </div>

            <div className="footer">
                <div className="date__">
                    <p><strong>21 DE AGOSTO 2025</strong></p>
                    <p>11:00 AM - Argentina  |  10:00 AM - Chile  |  09:00 - Colombia</p>
                </div>

                <button onClick={redirectToWebinar} className="register__">Registrate en webinar</button>
            </div>
        </div>
        </div>
    );
    };

    export default Popup;