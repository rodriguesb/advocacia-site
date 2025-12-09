import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/contactForm.css'

export default function ContactForm() {
  const navigate = useNavigate()

  const [telefone, setTelefone] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  function formatarTelefone(valor) {
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setEnviando(true)

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })

      if (!response.ok) throw new Error()

      setSucesso(true)
      setEnviando(false)

      setTimeout(() => setFadeOut(true), 2500)
      setTimeout(() => navigate('/'), 3000)

      setTimeout(() => {
        form.reset()
        setTelefone('')
      }, 1000)
    }
    catch {
      setErro('❌ Não foi possível enviar seus dados no momento. Por favor, tente novamente em alguns instantes.')
      setEnviando(false)
    }
  }

  return (
    <div className={`form-box ${fadeOut ? 'form-fade' : ''}`}>

      <h2>Explique o seu caso</h2>

      {sucesso && (
        <div className="form-success">
          <div className="check-icon"></div>
          <p>✅ Mensagem enviada com sucesso!</p>
          <div className="progress-bar"></div>
        </div>
      )}

      {erro && (
        <div className="form-error">
          {erro}
        </div>
      )}

      {!sucesso && (
        <form
          action="https://formsubmit.co/misllenesantos.adv@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Novo contato pelo site" />
          <input type="hidden" name="_template" value="table" />

          <input type="text" name="nome" placeholder="Seu nome completo" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />

          <input
            type="tel"
            name="telefone"
            placeholder="WhatsApp com DDD"
            value={telefone}
            onChange={e => setTelefone(formatarTelefone(e.target.value))}
            required
            disabled={enviando}
          />

          <textarea
            name="mensagem"
            placeholder="Descreva brevemente o seu caso"
            required
            disabled={enviando}
          ></textarea>

          <button type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Solicitar Atendimento'}
          </button>

        </form>
      )}

    </div>
  )
}
