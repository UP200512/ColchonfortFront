import React, {createContext, useState, useEffect} from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Container from "../../components/Card_container/Container.jsx";
import Container2 from "../../components/Card_container2/Card_Container2.jsx";
import "./HomePage.css";
import { defaultrequestOptions } from "../../data.js";
export const DataContextHome = createContext()
function HomePage() {
  // const { variante, id } = useParams();
  // const [dataOrigin, setDataOrigin] = useState([]);
  const [data, setData] = useState([])
  const id=100000;
  useEffect(() => {
      // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
      fetch('http://localhost:3000/api/productos', defaultrequestOptions)
          .then(response => response.json())
          .then(data => {
              // setDataOrigin(data)
              setData(data)
              // console.log(data)
              console.log(defaultrequestOptions)
          })
          .catch(error => console.log(error));
  }, [id]);
  return (
    <DataContextHome.Provider value={data} >

      <Hero/>
      <div className="Back">
      <Container/>
      {/* <Container2 /> */}
      </div>
    </DataContextHome.Provider>
  );
}

export default HomePage;
