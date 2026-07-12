import './App.css'
import Saludo from './componentes/Saludo.jsx'
import Saludo2 from './componentes/Saludo2.jsx'
import ListaHabilidades from './componentes/ListaHabilidades.jsx'
import Layout from './componentes/Layout'
import Productos from './componentes/Productos/Producto.jsx'
import Producto2 from './componentes/Productos/Producto2.jsx'

function App() {
  return (
    <div style={{ padding: 24 }}>
      <Layout>
        return (
          <div>
            <Saludo nombre="María" />
            <Saludo nombre="Juan" />
            <Saludo nombre="Pedro" />
          </div>
        );
        <Saludo2 nombre="María" edad={25} ciudad="Buenos Aires" />
        <ListaHabilidades></ListaHabilidades>
        <h2>Productos</h2>
        <Productos></Productos>
        <Producto2></Producto2>
      </Layout>
    </div>
  )
  
}

export default App