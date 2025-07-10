import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'
import './hamburger.css'
import styles from './header.module.css'
import Carousel from '../Carousel/Carousel'

export default function Header() {
  // Criando uma variável que verifica se o header foi clicado ou não
  const [clicado, setClicado] = useState(false)

  // Função para fazer a verificação se o header foi clicado
  function clicouHeader() {
    setClicado(!clicado)
  }


  return (
    <>
      <header className={styles.containerHeader}>
        <div className={styles.navMobile}>
          {/* <div className={styles.bannerHeaderMobile}></div> */}
          <Carousel />
          <Navbar
            expand={false}
            className='bg-body-tertiary mb-3'
            expanded={clicado}
            onClick={clicouHeader}
          >
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${false}`}
              />
              <Navbar.Brand href='#'>Soluciones para pinturas</Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement='start'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${false}`}
                    dir='left'
                  >
                    Soluciones para pinturas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className='justify-content-end flex-grow-1 pe-3'
                    onClick={clicouHeader}
                  >
                    <Nav.Link>
                      <NavLink to='/' end>
                        {({ isActive }) => (
                          <span className={isActive ? 'ativado' : 'desativado'}>
                            HOME
                          </span>
                        )}
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link>
                      <NavLink
                        to='/productos'
                        onClick={clicouHeader}
                      >
                        {({ isActive }) => (
                          <span className={isActive ? 'ativado' : 'desativado'}>
                            PRODUCTOS
                          </span>
                        )}
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link>
                        <a
                            href='https://my.basf.com/es-ES/'
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={clicouHeader}
                            className='desativado'
                        >
                            ACCEDÉ CON TU USUARIO
                        </a>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>

        <nav className={styles.navDesktop}>
          {/* <div className={styles.bannerHeader}></div> */}
          <Carousel />
          <ul className={styles.destkopMenuList}>
            {/* Menu da HOME */}
            <li>
              <NavLink to='/' end>
                {({ isActive }) => (
                  <span className={isActive ? 'ativado' : 'desativado'}>
                    HOME
                  </span>
                )}
              </NavLink>
            </li>

            {/* Menu da productos */}
            <li>
              <NavLink to='/productos'>
                {({ isActive }) => (
                  <span className={isActive ? 'ativado' : 'desativado'}>
                    PRODUCTOS
                  </span>
                )}
              </NavLink>
            </li>

            {/* Nuevo botón: Registrate ahora */}
            <li>
              <NavLink to='/productos' state={{ abrirFormulario: true }}>
                {({ isActive }) => (
                  <span className={isActive ? 'ativado' : 'desativado'}>
                    REGISTRATE AHORA
                  </span>
                )}
              </NavLink>
            </li>

            {/* Menu de compras */}
            <li>
              <NavLink to='https://my.basf.com/es-ES/' target="_blank">
                {({ isActive }) => (
                  <span className={isActive ? 'ativado' : 'desativado'}>
                    ACCEDÉ CON TU USUARIO
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
