import React from 'react'

export default function NoAdmin() {
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
        <div className='bg-dark d-flex justify-content-center align-items-center vh-100'>
            
            <div className='text-white text-center'>
            
                <h1>
                    Espera que el administrador te convierta en admin, una vez que lo haga vuelve y haz clic en el siguiente botón
                    <br />
                    <button className='btn btn-success' onClick={()=>window.location.href='/'}>Página principal</button>
                    <br />
                    <button className='btn btn-danger' onClick={()=>logout()}>Salir</button>
                </h1>
                
            </div>
        </div>
    )
}
