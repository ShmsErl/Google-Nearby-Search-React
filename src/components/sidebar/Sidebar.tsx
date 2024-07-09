import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css";

type Props = {}

const Sidebar = (props: Props) => {


  return (


    <aside className='aside'>
      <div className="nav__footer">
        <img src="https://codex.ist/desktop-logo.3b31893c.svg" alt="asd" className="logo" />
      </div>


      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"} className="nav__link"><i className="icon-home"></i></Link>
            </li>
            <li className="nav__item">
              <a href="#abour" className="nav__link"> <i className="icon-user-following"></i></a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link"><i className="icon-briefcase"></i></a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link"><i className="icon-graduation"></i></a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link"><i className="icon-layers"></i></a>
            </li>
            <li className="nav__item">
              <Link to="/feedbox" className="nav__link"><i className="icon-bubble"></i></Link>
            </li>
          </ul>
        </div>
      </nav>
      <div >

      </div>

      <div>
        <button className="btn btn-primary me-md-2 helloBtn " type="button">Hello</button>

      </div>


    </aside>
  )
}

export default Sidebar