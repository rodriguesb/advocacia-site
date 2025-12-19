import Header from './components/Header'
import Footer from './components/Footer'
import Router from './router'
import './styles/header.css'
import './styles/footer.css'

export default function App() {
  return (
    <>
      <Header />
      <main className="site-main">
        <Router />
      </main>
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/5511977179302" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </>
  )
}
