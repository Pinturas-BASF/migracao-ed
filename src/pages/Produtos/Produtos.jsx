import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Formulario from '../../components/Formulario/Formulario'
import Produto from '../../components/Produto/Produto'
import { todosProdutos } from '../../services/todosProdutos'
import styles from './produtos.module.css'

export default function Produtos() {

    // Criando variável para o filtro
    const [produtoFiltrado, setProdutoFiltrado] = useState(todosProdutos)
    const [nomeDoFiltro, setNomeDoFiltro] = useState('Todos')

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

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 3000)
    }, []);

    return (
        <>
            <Helmet>
                <title>Soluciones para pinturas | Produtos</title>

            </Helmet>


            <div className={styles.introducaoFiltros}>
                <p>¿Está interesado en algún producto y quiere obtener más información? Haga clic en el botón <b>“Tengo Interés”</b>. </p>
                <p>Los artículos seleccionados aparecerán en su <b>“Lista de Interés”</b>, que estará disponible al final de esta página. Solo tiene que completar sus datos, revisar los productos seleccionados y hacer clic en el botón <b>“Enviar”</b>. Nuestro equipo se pondrá en contacto para brindarle más detalles. </p>
                
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
            {loading ? <Produto filtro={produtoFiltrado} nomeDoFiltro={nomeDoFiltro}/>
                :
                <div className={styles.containerLoading}>
                    <div id={styles.loadingProduct}></div>
                    <p>Cargando los productos</p>
                </div>
            }
            <Formulario />
        </>
    )
}
