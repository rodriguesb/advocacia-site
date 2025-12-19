import { useState } from 'react'
import '../styles/contactForm.css'

export default function ContactForm() {
  const [telefone, setTelefone] = useState('')

  function formatarTelefone(valor) {
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  return (
    <div className="form-box">
      <h2>Explique o seu caso</h2>
      <form action="https://formsubmit.co/misllenesantos.adv@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Novo contato pelo site" />
        <input type="text" name="nome" placeholder="Seu nome completo" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <input
          type="tel"
          name="telefone"
          placeholder="WhatsApp com DDD"
          value={telefone}
          onChange={e => setTelefone(formatarTelefone(e.target.value))}
          required
        />
        <textarea name="mensagem" placeholder="Descreva brevemente o seu caso" required></textarea>
        <button type="submit">Solicitar Atendimento</button>
      </form>
    </div>
  )
}
