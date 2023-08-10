import React, { useState } from 'react';
import './css/login.css'; // Asegúrate de ajustar la ruta de importación si es necesario



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState('');
  const [data, setData] = useState([]);
  
  
  const onTypeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email)
  }

  const onTypePassword = (e) => {
    setpassword(e.target.value);
  }


  const Acceder = (e)=>{
    e.preventDefault()
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({
        email: email, clave: password 
      })
    };
    fetch('http://localhost:3000/api/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        // setData(data)
        console.log(data)
        if(data.auth){

          localStorage.setItem('token', data.token);
          localStorage.setItem('tipo', data.tipo);
          if(data.tipo ==='admin'){
            window.location.href='/'
          }else{
            window.location.href='/noadmin'
          }
          

        }else{
          alert("Credenciales incorrectas!");
        }
        
      })
      .catch(error => console.log(error));
  }


  return (
    <div id="contenedor">
      <div id="central">
        <div id="login">
          <div className="titulo">
            Bienvenido
          </div>
          <form id="loginform" onSubmit={(e)=>Acceder(e)}>
            <input type="email" name="usuario" placeholder="Usuario" onChange={(e)=>onTypeEmail(e)} required />
            <input type="password" minLength={8} placeholder="Contraseña" name="password" onChange={(e)=>onTypePassword(e)}  required />
            <button type="submit"  title="Ingresar" name="Ingresar">Login</button>
          </form>
          <div className="pie-form">
            <a href="#">¿Perdiste tu contraseña?</a>
            <a href="/signin">¿No tienes Cuenta? Registrate</a>
          </div>
        </div>
        <div className="inferior">
          {/* <a href="#">Volver</a> */}
        </div>
      </div>
    </div>
  );
};

export default Login;