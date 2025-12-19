import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/img/logo.png'
import '../styles/header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-container">

        <div className="header-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo do Escritório" />
          </NavLink>
        </div>

        {/* BOTÃO SANDUÍCHE */}
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* MENU */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Início</NavLink>
          <NavLink to="/sobre" onClick={closeMenu}>Sobre</NavLink>
          <NavLink to="/servicos" onClick={closeMenu}>Serviços</NavLink>
          <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
        </nav>

      </div>
    </header>
  )
}
