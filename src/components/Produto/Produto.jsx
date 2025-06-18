import { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import styles from './produto.module.css'

export default function Produto({ filtro, nomeDoFiltro }) {
  // Pegando as variaveis do UseContext
  const { tenhoInteresse, ativarForm } = useContext(FormContext)

  console.log(nomeDoFiltro)

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.tituloClassificacao}>
          {nomeDoFiltro === 'Industriales' ? '' : 'Emulsiones Polimérica'}
        </h1>
        <div className={styles.todosProdutos}>
          {filtro.map(produto =>
            produto.filtro.includes('Emulsiones') ? (
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
            ) : (
              <></>
            )
          )}
        </div>

        <h1 className={styles.tituloClassificacao}>Aditivos</h1>
        <div className={styles.todosProdutos}>
          {filtro.map(produto =>
            produto.filtro.includes('Aditivos') ? (
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
            ) : (
              <></>
            )
          )}
        </div>

        <h1 className={styles.tituloClassificacao}>{nomeDoFiltro === 'Decorativas' ? '' : 'Resinas'}</h1>
        <div className={styles.todosProdutos}>
          {filtro.map(produto =>
            produto.filtro.includes('Resinas') ? (
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
            ) : (
              <></>
            )
          )}
        </div>
      </section>
    </>
  )
}
