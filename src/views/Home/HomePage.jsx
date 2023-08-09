import React, {createContext, useState, useEffect} from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Container from "../../components/Card_container/Card_Container.jsx";
import "./HomePage.css";

export const DataContextHome = createContext()
function HomePage() {
  // const { variante, id } = useParams();
  // const [dataOrigin, setDataOrigin] = useState([]);
  const [data, setData] = useState([])
  const id=100000;
  useEffect(() => {
      // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
      fetch('http://localhost:3000/api/productos')
          .then(response => response.json())
          .then(data => {
              // setDataOrigin(data)
              setData(data)
              // console.log(data)
          })
          .catch(error => console.log(error));
          
      // setDataFiltered(dataOrigin)
  }, [id]);
  // const typing = (e) => {
  //     const searchTerm = e.target.value.toLowerCase();
  //     // console.log(searchTerm);
  //     setDataFiltered(dataOrigin.filter(item => item.nombre.toLowerCase().includes(searchTerm)));
  // }
  return (
    <DataContextHome.Provider value={data} >

      <Hero/>
      <div className="Back">
      <Container/>
      </div>
    </DataContextHome.Provider>
  );
}

export default HomePage;
