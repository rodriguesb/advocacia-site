import '../styles/hero.css'
import SEO from '../components/SEO'

export default function Hero() {
  return (
    <section className="page hero">

      <SEO
        title="Advogada Trabalhista em Mauá | Misllene Silva Santos"
        description="Atendimento jurídico trabalhista especializado em Mauá e região. Consultoria humanizada e defesa de direitos do trabalhador."
      />

      <div className="hero-content">
        <div className="hero-text">
          <h1>Compromisso com seus direitos. Excelência em cada detalhe.</h1>
          <p>
            Atuamos com dedicação, responsabilidade e profundo conhecimento da legislação trabalhista para defender o que é seu por direito.
            Cada caso é tratado de forma única, com atenção, estratégia e transparência.
            Nosso objetivo é oferecer segurança jurídica e resultados consistentes para você.
            Aqui, você não é apenas mais um processo. Você é nossa prioridade.
          </p>
        </div>
      </div>

    </section>
  )
}
