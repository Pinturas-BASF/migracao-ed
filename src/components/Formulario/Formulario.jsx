import React, { useContext, useState } from 'react'
import styles from './formulario.module.css'
import ProdutoInteresse from '../ProdutoInteresse/ProdutoInteresse'
import { FormContext } from '../../context/formContext'
import { ThreeDots } from 'react-loader-spinner';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function Formulario() {

  // Pegando as variaveis do UseContext 
  const { enviarForm, success, produtosSelecionados } = useContext(FormContext)

  // Criando varaiveis para utilizar no formulário
  const [nome, setNome] = useState('')
  const [nomeEmp, setNomeEmp] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [termos, setTermos] = useState(false)
  const [clicou, setClicou] = useState(false)

  return (
    <>
      <div className={styles.formularioContainer} id={clicou ? styles.visible : ""}>
        <div className={[styles.formDropdown,styles.ativo].join(' ')} onClick={() => setClicou(!clicou)} id={"formulario"} data-formAtivo={clicou}>
          <div className={styles.arrow}>{clicou ? <SlArrowDown /> : <SlArrowUp />}</div>
          <p>CLIQUE Y SOLICITE SU INTERÉS.</p>
        </div>

        <div className={styles.formulario} id={clicou ? styles.show : ""}>

          <h1>Productos que tengo interés</h1>
          {/* colocar os produtos aqui */}
          <div className={styles.produtos}>
            <ProdutoInteresse />

          </div>

          <div className={styles.inputForms}>
            <label htmlFor="nmCompleto">Nombre Completo <span>*</span></label>
            <input type="text" name="nmCompleto" placeholder='Ingrese su nombre completo.' onChange={e => setNome(e.target.value)} value={nome} />
          </div>

          <div className={styles.inputForms}>
            <label htmlFor="email">Correo <span>*</span></label>
            <input type="email" name="email" placeholder='Ingresse su correo' onChange={e => setEmail(e.target.value)} value={email} />
          </div>

          <div className={styles.inputForms}>
            <label htmlFor="telefone">Teléfono </label>
            <input type="tel" name="telefone" placeholder='Ingresse su teléfono' onChange={e => setTel(e.target.value)} value={tel} />
          </div>

          <div className={styles.inputForms}>
            <label htmlFor="nmEmpresa">Nombre de la Empresa</label>
            <input type="text" name="nmEmpresa" placeholder='Ingrese el nombre de su empresa.' onChange={e => setNomeEmp(e.target.value)} value={nomeEmp} />
          </div>

          <div className={styles.inputFormsTermos}>
            <label htmlFor="termosEcond">Acepto los términos y condiciones y la <a href="/solucionesparapinturas/politica-privacidad" target='_blank' rel="noreferrer">política de privacidad</a>.</label>
            <input type="checkbox" name="termosEcond" id='termosEcond' onChange={e => setTermos(e.target.checked)} />
          </div>

          {success ? <ThreeDots
            height="60"
            width="60"
            radius="9"
            color="#004a96"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> : <button onClick={() => enviarForm(nome, email, tel, nomeEmp, produtosSelecionados,termos)}>ENVIAR</button>}
        </div>
      </div>
    </>
  )
}
