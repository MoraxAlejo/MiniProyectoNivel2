import { Cards } from "../componentes/Cards";
import Finland from "../componentes/Finland";
import Nav from "../componentes/Nav";

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
