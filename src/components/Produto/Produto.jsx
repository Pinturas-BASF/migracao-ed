import { useContext, useEffect, useMemo, useState } from 'react'
import { FormContext } from '../../context/formContext'
import BuscadorProdutos from '../BuscadorProdutos/BuscadorProdutos'
import styles from './produto.module.css'

export default function Produto({ filtro, nomeDoFiltro }) {
  // Pegando as variaveis do UseContext
  const { tenhoInteresse, ativarForm } = useContext(FormContext)

  const [termoAplicado, setTermoAplicado] = useState('')
  const [resultadosBusca, setResultadosBusca] = useState([])

  const categorias = useMemo(
    () => [
      {
        chave: 'Emulsiones',
        titulo: nomeDoFiltro === 'Industriales' ? '' : 'Emulsiones Polimérica',
      },
      {
        chave: 'Aditivos',
        titulo: 'Aditivos',
      },
      {
        chave: 'Resinas',
        titulo: nomeDoFiltro === 'Decorativas' ? '' : 'Resinas',
      },
    ],
    [nomeDoFiltro]
  )

  useEffect(() => {
    setTermoAplicado('')
    setResultadosBusca([])
  }, [nomeDoFiltro])

  const renderCardProduto = produto => (
    <div className={styles.produto} key={produto.id} id={produto.id}>
      <h1 className={styles.titulo}> {produto.nome} </h1>
      <p className={styles.descricao}> {produto.desc} </p>

      <button
        onClick={() => {
          tenhoInteresse(produto)
          ativarForm()
        }}
        className={styles.btnInteresse}
      >
        TENGO INTERÉS
      </button>
    </div>
  )

  const handleBuscarProdutos = ({ termoAplicado: termo, resultados }) => {
    setTermoAplicado(termo)
    setResultadosBusca(resultados)
  }

  return (
    <section id='productos' className={styles.container}>
      <BuscadorProdutos
        key={nomeDoFiltro}
        produtos={filtro}
        onBuscar={handleBuscarProdutos}
      />

      {termoAplicado ? (
        <>
          {resultadosBusca.length > 0 ? (
            <div className={styles.todosProdutos}>
              {resultadosBusca.map(renderCardProduto)}
            </div>
          ) : (
            <p className={styles.mensagemSemResultados}>
              No se encontraron productos similares con ese término.
            </p>
          )}
        </>
      ) : (
        categorias.map(categoria => {
          const produtosCategoria = filtro.filter(produto =>
            produto.filtro.includes(categoria.chave)
          )

          if (produtosCategoria.length === 0) {
            return null
          }

          return (
            <div className={styles.grupoCategoria} key={categoria.chave}>
              {categoria.titulo ? (
                <h1 className={styles.tituloClassificacao}>{categoria.titulo}</h1>
              ) : null}
              <div className={styles.todosProdutos}>
                {produtosCategoria.map(renderCardProduto)}
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}