import { Cards } from "../componentes/Cards";
import Nav from "../componentes/Nav";
import Finland from "../componentes/Finland";

function App() { 
  return (
    // mi Barra Nav y luego Finland que trae el texto antes que Los Cards
  <div className="divpadre">
    <Nav /> 
    <Finland />
  <div className="container-cards">  
    <Cards />
  </div>
  </div>

  // en container cards se encuentra el Cards.jsx  
  )
}

export default App;
