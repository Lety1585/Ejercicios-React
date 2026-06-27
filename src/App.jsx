import './App.css'
import Layout from './componentes/Layout'
import Productos from './componentes/Productos/Producto.jsx'

function App() {
  return (
    <div style={{ padding: 24 }}>
      <Layout>
        <h2>Productos</h2>
        <Productos></Productos>
      </Layout>
    </div>
  )
  
}

export default App