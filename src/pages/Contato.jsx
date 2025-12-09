import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import '../styles/contato.css'

export default function Contato() {
  return (
    <>
      <SEO
        title="Contato | Advogada Trabalhista em Mauá"
        description="Entre em contato com a advogada e receba orientação profissional."
      />

      <section className="contato-section" id="contato">
        <div className="contato-container">

          <div className="contato-info">

            <h2>Entre em Contato</h2>
            <h3>Atendimento Jurídico Especializado</h3>
            <p>Tire suas dúvidas agora mesmo e receba orientação segura.</p>

            <p><strong>Telefone:</strong> (11) 97717-9302</p>
            <p><strong>Email:</strong> misllenesantos.adv@gmail.com</p>

            <a
              href="https://wa.me/5511977179302"
              className="contato-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>

          </div>

          <ContactForm />

        </div>
      </section>
    </>
  )
}
