import Header from './layout/Header'
import Footer from './layout/Footer'
import Router from './router'

function App() {
  return (
    <>
      <Header />

      <main className="site-main">
        <Router />
      </main>

      <Footer />
    </>
  )
}

export default App
