import './App.css'
import Saludo from './componentes/Saludo'
import Producto from "./componentes/Producto";
import Habilidades from "./componentes/ListaHabilidades";

function App() {
  return (
    <div style={{ padding: 24 }}>
      <Saludo></Saludo>
      <Habilidades></Habilidades>
      <Producto />
    </div>
  )
  
}

export default App
