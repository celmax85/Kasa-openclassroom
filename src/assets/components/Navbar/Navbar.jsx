import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <NavLink to="/" className='navbar-logo'>
          <img src="./src/assets/image/logo/logo.png" alt="" />
        </NavLink>
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div>A propos</div>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar