import { useEffect, useMemo, useRef, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { todosProdutos } from '../../services/todosProdutos'
import styles from './buscadorProdutos.module.css'

const normalizarTexto = texto =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

const pontuarProduto = (produto, termo) => {
  if (!termo) return 0

  const nomeNormalizado = normalizarTexto(produto.nome)
  const descricaoNormalizada = normalizarTexto(produto.desc)

  if (nomeNormalizado.startsWith(termo)) return 4
  if (nomeNormalizado.includes(termo)) return 3
  if (descricaoNormalizada.includes(termo)) return 1

  return 0
}

export default function BuscadorProdutos({
  produtos = todosProdutos,
  onBuscar,
  placeholder = 'Buscador de productos',
}) {
  const [textoBusca, setTextoBusca] = useState('')
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false)

  const buscadorRef = useRef(null)
  const inputRef = useRef(null)

  const sugestoes = useMemo(() => {
    const termo = normalizarTexto(textoBusca)

    if (!termo) return []

    return produtos
      .map(produto => ({
        produto,
        score: pontuarProduto(produto, termo),
      }))
      .filter(({ score }) => score > 0)
      .sort(
        (a, b) =>
          b.score - a.score || a.produto.nome.localeCompare(b.produto.nome)
      )
      .slice(0, 12)
      .map(({ produto }) => produto)
  }, [produtos, textoBusca])

  const executarBusca = (termoDigitado, produtoSelecionadoId = null) => {
    const termoNormalizado = normalizarTexto(termoDigitado)
    let resultados = []

    if (produtoSelecionadoId) {
      resultados = produtos.filter(produto => produto.id === produtoSelecionadoId)
    } else if (termoNormalizado) {
      resultados = produtos
        .map(produto => ({
          produto,
          score: pontuarProduto(produto, termoNormalizado),
        }))
        .filter(({ score }) => score > 0)
        .sort(
          (a, b) =>
            b.score - a.score || a.produto.nome.localeCompare(b.produto.nome)
        )
        .map(({ produto }) => produto)
    }

    if (onBuscar) {
      onBuscar({
        termoAplicado: termoDigitado.trim(),
        resultados,
      })
    }
  }

  const handleSubmitBusca = evento => {
    evento.preventDefault()
    handleBuscarTodosResultados()
  }

  const handleBuscarTodosResultados = () => {
    executarBusca(textoBusca)
    setMostrarSugestoes(false)
  }

  const handleChangeBusca = evento => {
    const valor = evento.target.value

    setTextoBusca(valor)
    setMostrarSugestoes(true)

    if (!valor.trim() && onBuscar) {
      onBuscar({
        termoAplicado: '',
        resultados: [],
      })
    }
  }

  const handleSelecionarSugestao = produto => {
    setTextoBusca(produto.nome)
    executarBusca(produto.nome, produto.id)
    setMostrarSugestoes(false)
  }

  const handleLimparBusca = () => {
    setTextoBusca('')
    setMostrarSugestoes(false)

    if (onBuscar) {
      onBuscar({
        termoAplicado: '',
        resultados: [],
      })
    }

    inputRef.current?.focus()
  }

  useEffect(() => {
    const fecharSugestoes = evento => {
      if (buscadorRef.current && !buscadorRef.current.contains(evento.target)) {
        setMostrarSugestoes(false)
      }
    }

    document.addEventListener('mousedown', fecharSugestoes)

    return () => {
      document.removeEventListener('mousedown', fecharSugestoes)
    }
  }, [])

  return (
    <div className={styles.buscadorContainer} ref={buscadorRef}>
      <form className={styles.formBuscador} onSubmit={handleSubmitBusca}>
        <div className={styles.inputBuscadorWrapper}>
          <FiSearch className={styles.iconeBusca} aria-hidden='true' />
          <input
            id='buscadorProductos'
            ref={inputRef}
            type='text'
            value={textoBusca}
            onChange={handleChangeBusca}
            onFocus={() => setMostrarSugestoes(true)}
            placeholder={placeholder}
            className={styles.inputBuscador}
          />
          {textoBusca ? (
            <button
              type='button'
              onClick={handleLimparBusca}
              className={styles.btnLimpar}
              aria-label='Limpiar búsqueda'
            >
              <FiX aria-hidden='true' />
            </button>
          ) : null}
        </div>
      </form>

      {mostrarSugestoes && textoBusca.trim() ? (
        <div className={styles.painelSugestoes}>
          {sugestoes.length > 0 ? (
            <ul className={styles.listaSugestoes}>
              {sugestoes.map(produto => (
                <li key={produto.id}>
                  <button
                    type='button'
                    className={styles.itemSugestao}
                    onClick={() => handleSelecionarSugestao(produto)}
                  >
                    {produto.nome}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}

          <div className={styles.itemVerTodosContainer}>
            <button
              type='button'
              className={styles.itemVerTodos}
              onClick={handleBuscarTodosResultados}
            >
              Ver todos los resultados de búsqueda
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
