
import { useEffect, useState } from "react";
import Icons from "../componentes/icons";

export const Cards = () => {

   // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data); 

  

  return (
    <>
    

          {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
          {data.map((el, i) => {
        
            // los divs llamados cards
          return <div className="cards" key={i}>
                   <div className="contenedor-imagen"> <img src={el.photo} className="photo" alt="" /> </div>
                    <div className="rating">
                        
                    <div><p className="type">{el.type}</p></div>
                    <div className="points">  <Icons /> <div className="numbers"> {el.rating} </div> </div>
                    </div>
                    <h4 className="description"> {el.title}</h4>
                  </div>;
            }
            )}
    
     
    </>
  );
        
  
}
