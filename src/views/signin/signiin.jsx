import React, { useEffect, useState } from 'react';
import './css/login.css'; // Asegúrate de ajustar la ruta de importación si es necesario



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState('');
  const [confirPassword, setConfirPassword] = useState('');
  const [concuerdan, setConcuerdan] = useState(false);
  
  
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    if(password===confirPassword){
      setConcuerdan(true)
    }else setConcuerdan(false);
  }, [confirPassword])
  
  const onTypeName = (e) => {
    setNombre(e.target.value);
    // console.log(email)
  }
  const onTypeConfirm = (e) => {
    setConfirPassword(e.target.value);
    // console.log(email)
  }

  const onTypeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email)
  }

  const onTypePassword = (e) => {
    setpassword(e.target.value);
  }


  const Acceder = (e) => {
    e.preventDefault()

    if(concuerdan){
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email, clave: password, nombre: nombre
        })
      };
      fetch('http://localhost:3000/api/usuarios', requestOptions)
        .then(response => response.json())
        .then(data => {
          // setData(data)
          // console.log(data)
          if (data.repetido>0) {
            alert("Este correo ya esta en uso")
          }
          if (data.affectedRows > 0) {
  
            localStorage.setItem('token', data.token);
            window.location.href = '/'
  
          } else {
            alert("Credenciales incorrectas!");
          }
  
        })
        .catch(error => {
          console.log(error)
          alert("Algo salió mal")
        });
    }
    
  }


  return (
    <div id="contenedor">
      <div id="central">
        <div id="login">
          <div className="titulo">
            Regístrate
          </div>
          <form id="loginform" onSubmit={(e) => Acceder(e)}>
            <label htmlFor="">Nombre</label>
            <input type="text"  maxLength={50} placeholder="Nombre" onChange={(e) => onTypeName(e)} required />
            <label htmlFor="">Correo</label>
            <input type="email"  placeholder="Usuario" onChange={(e) => onTypeEmail(e)} required />
            <label htmlFor="">Contraseña</label>
            <input type="password" minLength={8} placeholder="Contraseña"  onChange={(e) => onTypePassword(e)} required />
            <label htmlFor="">Confirmar contraseña</label>
            <input type="password" minLength={8} placeholder="Confirmar contraseña"  onChange={(e) => onTypeConfirm(e)} required />
            {concuerdan === false && <p className='text-danger'>No coinciden las contraseñas</p>}
            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
          </form>
          <div className="pie-form">

          </div>
        </div>
        <div className="inferior">
          <a href="/login">Volver</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;