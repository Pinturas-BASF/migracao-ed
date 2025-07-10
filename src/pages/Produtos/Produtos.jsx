import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Formulario from '../../components/Formulario/Formulario'
import Produto from '../../components/Produto/Produto'
import { todosProdutos } from '../../services/todosProdutos'
import styles from './produtos.module.css'
import { MobileNavButtons } from '../../components/MobileNavButtons/MobileNavButtons'

export default function Produtos() {
    // Criando variável para o filtro
    const [produtoFiltrado, setProdutoFiltrado] = useState(todosProdutos)
    const [nomeDoFiltro, setNomeDoFiltro] = useState('Todos')
    const [showForm, setShowForm] = useState(false)
    const [scrollToForm, setScrollToForm] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const productosRef = useRef(null)
    const formularioRef = useRef(null)

    const abrirFormulario = location.state?.abrirFormulario || false

    const isMobile = () => {
        return window.innerWidth <= 600
    }
    
    const handleAbrirFormulario = () => {
        setShowForm(true)
        setScrollToForm(true)
    }

    // Função de filtro dos produtos
    const filtro = (tipos) => {
        if (tipos !== 'Todos') {
            setNomeDoFiltro(tipos)
            setProdutoFiltrado(todosProdutos.filter((produto) => produto.filtro.includes(tipos)))
        } else {
            setNomeDoFiltro('Todos')
            setProdutoFiltrado(todosProdutos)
        }
    }

    useEffect(() => {
        if(abrirFormulario) {
            setShowForm(true)
            setScrollToForm(true)
            navigate(location.pathname, { replace: true })
        }
    }, [abrirFormulario, location.pathname, navigate])

    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 0)
    }, [])

    useEffect(() => {
        if (loading) {
            if (scrollToForm && formularioRef.current) {
                setTimeout(() => {
                    formularioRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                    setScrollToForm(false)
                }, 100)
            } else if (!isMobile() && productosRef.current) {
                productosRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }
    }, [loading, scrollToForm])

    useEffect(() => {
        if (loading && isMobile() && !abrirFormulario && !scrollToForm) {
            setTimeout(() => {
                if (productosRef.current) {
                    productosRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            }, 100)
        }
    }, [loading, abrirFormulario, scrollToForm])

    return (
        <>
            <Helmet>
                <title>Soluciones para pinturas | Produtos</title>
            </Helmet>

            <MobileNavButtons onRegisterClick={handleAbrirFormulario}/>
            
            <div className={styles.introducaoFiltros}>
                <p>¿Está interesado en algún producto y quiere obtener más información? Haga clic en el botón <b>"Tengo Interés"</b>. </p>
                <p>Los artículos seleccionados aparecerán en su <b>"Lista de Interés"</b>, que estará disponible al final de esta página. Solo tiene que completar sus datos, revisar los productos seleccionados y hacer clic en el botón <b>"Enviar"</b>. Nuestro equipo se pondrá en contacto para brindarle más detalles. </p>
            </div>

            <div className={styles.filtros}>
                <div>
                    <button onClick={() => filtro('Todos')} className={styles.btnFiltros}>Todos</button>
                </div>
                <div>
                    <button onClick={() => filtro('Decorativas')} className={styles.btnFiltros}>Pinturas Decorativas</button>
                </div>
                <div>
                    <button onClick={() => filtro('Industriales')} className={styles.btnFiltros}>Pinturas Industriales</button>
                </div>
            </div>
            
            {loading ? (
                <div ref={productosRef} >
                    <Produto filtro={produtoFiltrado} nomeDoFiltro={nomeDoFiltro}/>
                </div>
            ) : (
                <div ref={productosRef} >
                    <div className={styles.containerLoading}>
                        <div id={styles.loadingProduct}></div>
                        <p>Cargando los productos</p>
                    </div>
                </div> 
            )}
            
            <div ref={formularioRef}>
                <Formulario 
                    abrirPorDefecto={showForm || abrirFormulario}
                    key={`formulario-${showForm || abrirFormulario}`}
                />
            </div>
        </>
    )
}