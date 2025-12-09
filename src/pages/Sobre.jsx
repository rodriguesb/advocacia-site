import SEO from '../components/SEO'
import hero from '../assets/img/hero.jpg'
import '../styles/sobre.css'

export default function Sobre() {
  return (
    <section className="sobre-section" id="sobre">
      <SEO
        title="Sobre a Advogada | Misllene Silva Santos"
        description="Conheça a trajetória profissional da advogada trabalhista Misllene Silva Santos, especialista em Direito do Trabalho em Mauá."
      />

      <div className="sobre-container">
        <div className="sobre-texto">

          <h1>Minha Jornada</h1>

          <p>
            Dra. Misllene Silva Santos é especialista em Direito do Trabalho e atua
            com seriedade, ética e dedicação na defesa dos direitos de trabalhadores
            e empregadores. Cada cliente recebe atendimento personalizado,
            soluções objetivas e condução estratégica do seu caso.
            <br /><br />
            Cada processo é conduzido com responsabilidade, transparência e firmeza,
            buscando sempre o melhor resultado possível.
            <br /><br />
            Aqui, você não é apenas mais um processo. Você é prioridade.
          </p>

          <div className="sobre-destaques">
            <span>OAB/SP 531.965</span>
            <span>Atendimento humanizado</span>
            <span>Consultoria especializada</span>
          </div>

        </div>
      </div>

    </section>
  )
}
