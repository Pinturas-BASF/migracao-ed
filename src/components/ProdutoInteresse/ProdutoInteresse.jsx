import React, { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import styles from './produtoInteresse.module.css'

export default function ProdutoInteresse() {

    // Pegando as variaveis do UseContext 
    const { produtosSelecionados, removerSelecionado } = useContext(FormContext)

    return (
        <>
            {
                produtosSelecionados.map((produto) => (

                    <div key={produto.id} className={styles.interesseContainer} onClick={() => removerSelecionado(produto.id, produto.nome)}>
                        <input type="checkbox" name="checkbox" id={produto.nome} defaultChecked />
                        <label htmlFor="checkbox">{produto.nome}</label>
                    </div>
                ))
            }

        </>
    )
}
