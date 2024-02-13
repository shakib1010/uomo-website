import "./header.scss"
import logo from "./uomo.png"
import searchIcon from "./search.svg"
import personIcon from "./person.svg"
import loveIcon from "./love.svg"
import cartIcon from "./cart.svg"
import hamburgerIcon from "./hamburger.svg"

export default function Header() {
  return (
    <>
      <header className="header container">
        <nav className="header__nav">
          <div className="header__logo-box">
            <img className="header__logo" src={logo} alt="UOMO Logo" />
          </div>
          <ul className="header__nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Shop</li>
            <li className="nav-item">Collection</li>
            <li className="nav-item">Journal</li>
            <li className="nav-item">Lookbook</li>
            <li className="nav-item">Pages</li>
          </ul>
        </nav>
        <div className="header__icons">
          <img src={searchIcon} alt="" />
          <img src={personIcon} alt="" />
          <img src={loveIcon} alt="" />
          <img src={cartIcon} alt="" />
          <img src={hamburgerIcon} alt="" />
        </div>
      </header>
    </>
  )
}
