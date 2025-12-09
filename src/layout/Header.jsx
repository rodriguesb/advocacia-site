import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import logo from '../assets/img/logo.png'
import '../styles/header.css'

export default function Header() {

  useEffect(() => {
    function updateHeaderHeight() {
      const header = document.querySelector('.site-header')
      if (!header) return

      const height = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  return (
    <header className="site-header">
      <div className="header-container">
        
        <div className="header-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo do Escritório" />
          </NavLink>
        </div>

        <nav className="header-nav">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

      </div>
    </header>
  )
}
