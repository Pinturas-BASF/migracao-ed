import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Formulario from '../../components/Formulario/Formulario'
import Produto from '../../components/Produto/Produto'
import { todosProdutos } from '../../services/todosProdutos'
import styles from './produtos.module.css'
import { MobileNavButtons } from '../../components/MobileNavButtons/MobileNavButtons'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Produtos() {
  const [produtoFiltrado, setProdutoFiltrado] = useState(todosProdutos)
  const [nomeDoFiltro, setNomeDoFiltro] = useState('Todos')
  const [showForm, setShowForm] = useState(false)
  const [scrollToForm, setScrollToForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [showSwipeHint, setShowSwipeHint] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const productosRef = useRef(null)
  const formularioRef = useRef(null)

  const scrollTrigger = location.state?.scrollTrigger
  const abrirFormulario = location.state?.abrirFormulario || false

  const handleAbrirFormulario = () => {
    setShowForm(true)
    setScrollToForm(true)
  }

  useEffect(() => {
    if (scrollToForm && formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: 'smooth' })
      setScrollToForm(false)
    }
  }, [scrollToForm])

  const filtros = useMemo(
    () => [
      { chave: 'Todos', rotulo: 'Todos' },
      { chave: 'Emulsiones', rotulo: 'Emulsiones Poliméricas' },
      { chave: 'Aditivos', rotulo: 'Aditivos' },
      { chave: 'Resinas', rotulo: 'Resinas' },
    ],
    []
  )

  const filtro = (tipos) => {
    if (tipos !== 'Todos') {
      setNomeDoFiltro(tipos)
      setProdutoFiltrado(
        todosProdutos.filter((produto) => produto.filtro.includes(tipos))
      )
    } else {
      setNomeDoFiltro('Todos')
      setProdutoFiltrado(todosProdutos)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (scrollTrigger && loading) {
      if (productosRef.current) {
        productosRef.current.scrollIntoView({ behavior: 'smooth' })
        if (abrirFormulario && formularioRef.current) {
          setTimeout(() => {
            if (window.innerWidth <= 600) {
              formularioRef.current.scrollIntoView({ behavior: 'smooth' })
            } else {
              const toggleButton = document.querySelector('.js-toggle-form')
              toggleButton?.click()
            }
          }, 100)
        }
      }
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [scrollTrigger, abrirFormulario, loading, navigate, location.pathname])

  useEffect(() => {
    if (!swiperInstance) return
    const index = filtros.findIndex((item) => item.chave === nomeDoFiltro)
    if (index >= 0) {
      swiperInstance.slideTo(index)
    }
  }, [nomeDoFiltro, filtros, swiperInstance])

    useEffect(() => {
    if (window.innerWidth > 600) return

    const startTimer = setTimeout(() => {
        setShowSwipeHint(true)
    }, 250)

    const stopTimer = setTimeout(() => {
        setShowSwipeHint(false)
    }, 850)

    return () => {
        clearTimeout(startTimer)
        clearTimeout(stopTimer)
    }
    }, [])

  const renderFiltroButton = (filtroItem) => {
    const isActive = nomeDoFiltro === filtroItem.chave

    return (
      <button
        key={filtroItem.chave}
        type="button"
        onClick={() => filtro(filtroItem.chave)}
        className={`${styles.btnFiltros} ${isActive ? styles.btnFiltroAtivo : ''}`}
      >
        {filtroItem.rotulo}
      </button>
    )
  }

  return (
    <>
      <Helmet>
        <title>Soluciones para pinturas | Produtos</title>
      </Helmet>

      <MobileNavButtons onRegisterClick={handleAbrirFormulario} />

      <div className={styles.introducaoFiltros}>
        <p>
          ¿Está interesado en algún producto y quiere obtener más información? Haga clic
          en el botón <b>"Tengo Interés"</b>.
        </p>
        <p>
          Los artículos seleccionados aparecerán en su <b>"Lista de Interés"</b>, que
          estará disponible al final de esta página. Solo tiene que completar sus datos,
          revisar los productos seleccionados y hacer clic en el botón <b>"Enviar"</b>.
          Nuestro equipo se pondrá en contacto para brindarle más detalles.
        </p>
      </div>

      <div className={styles.filtrosWrapper}>
        <div className={styles.filtros}>
          {filtros.map((filtroItem) => (
            <div key={filtroItem.chave}>{renderFiltroButton(filtroItem)}</div>
          ))}
        </div>

        <div className={styles.filtrosMobile}>
            <div
                className={`${styles.filtrosMobileInner} ${showSwipeHint ? styles.swipeHint : ''}`}
            >
                <Swiper
                modules={[Pagination]}
                onSwiper={setSwiperInstance}
                pagination={{ clickable: true }}
                slidesPerView="auto"
                spaceBetween={14}
                centeredSlides={false}
                className={styles.filtrosSwiper}
                >
                {filtros.map((filtroItem) => (
                    <SwiperSlide key={filtroItem.chave} className={styles.filtroSlide}>
                    {renderFiltroButton(filtroItem)}
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
      </div>

      {loading ? (
        <div ref={productosRef}>
          <Produto filtro={produtoFiltrado} nomeDoFiltro={nomeDoFiltro} />
        </div>
      ) : (
        <div ref={productosRef}>
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