import SEO from '../components/SEO'
import trabalhista from '../assets/img/trabalhista.jpg'
import '../styles/servicos.css'

export default function Servicos() {
  return (
    <section className="servicos-section" id="servicos">
      <SEO
        title="Direito Trabalhista | Advocacia em Mauá"
        description="Atuação em rescisões, indenizações, vínculo de emprego, horas extras e mais."
      />

      <div className="servicos-container">
        <h1>Áreas de Atuação</h1>

        <div className="servicos-layout">

          <div className="servicos-imagem">
            <img src={trabalhista} alt="Atuação em Direito Trabalhista" />
          </div>

          <div className="servicos-texto">

            <h2>Direito Trabalhista</h2>

            <ul className="servicos-lista">
              <li>Verbas rescisórias não pagas</li>
              <li>Rescisão indireta</li>
              <li>Assédio moral no trabalho</li>
              <li>Trabalho insalubre ou perigoso</li>
              <li>Doença relacionada ao trabalho</li>
              <li>Acidente de trabalho</li>
              <li>Horas extras e adicionais</li>
            </ul>

            <p className="servicos-final">
              Atendimento estratégico e humanizado para garantir seus direitos
              e buscar a melhor solução jurídica para o seu caso.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
