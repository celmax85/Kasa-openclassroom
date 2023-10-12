import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <NavLink to="/" className='navbar-logo'>
          <img src="https://ucarecdn.com/df6508a7-02aa-4855-aeaf-a07dff99e282/-/preview/500x500/-/quality/smart/-/format/auto/" alt="" />
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