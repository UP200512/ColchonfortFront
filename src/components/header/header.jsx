import React from 'react';
import menu from "../../img/menu_icon.png"
import './header.css';
import { TbLogout } from 'react-icons/tb'



function Header() {
  const token = localStorage.getItem('token');
  const logout = () => {
    if (token) {
      if (window.confirm("Cerrar sesión")) {
        localStorage.removeItem('token');
        window.location.href = '/login'
      }
    }


  }


  return (
    <header className="main-header" >
      <div className="header-wrap">
        <div className="wrap-logo-header">
          <a className="logo-header" href="/">
            Crazy Fryer
          </a>
        </div>
        <div className="wrap-nav-header">
          <nav className="nav-header">
            <input type="checkbox" id="check" />

            <label htmlFor="check" className="checkbtn">
              <i className="toggle-menu">
                <img src={menu} alt="Menu" />
              </i>
            </label>
            <ul className="main-menu">
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}

              <li className="menu-item"> {/**key para asigar un identificador unico que en este caso seria index */}

                <a href='/carta/menu/100000'>Menú</a>

                <a href='/Estadisticas'>Estadisticas</a>
                <a href='/Pedidos'> Pedidos</a>
                <a href='/insumos/card'> Insumos</a>
                <a href='/empresa'> Empresa</a>
                <a href='/usuarios'> Usuarios</a>
                <button className='btn btn-danger' onClick={() => logout()}>Log out <TbLogout /></button>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
