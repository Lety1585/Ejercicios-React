import './App.css'
import Saludo from './componentes/Saludo.jsx'
import Saludo2 from './componentes/Saludo2.jsx'
import ListaHabilidades from './componentes/Empleados/ListaHabilidades.jsx'
import Layout from './componentes/Layout'
import Productos from './componentes/Productos/Producto.jsx'
import Producto2 from './componentes/Productos/Producto2.jsx'
import TarjetaProducto from './componentes/Productos/TarjetaProducto.jsx'
import ListaEmpleados from './componentes/Empleados/ListaEmpleados.jsx'
import MovieListContainer from './componentes/FlujoHooks/MovieListContainer.jsx'

const empleados = [
  { nombre: "Lucía",    edad: 25, profesion: "Diseñadora"        },
  { nombre: "Pedro",    edad: 32, profesion: "Técnico"            },
  { nombre: "Lorena",   edad: 32, profesion: "Analista"           },
  { nombre: "Federico", edad: 41, profesion: "Lider de proyecto"  },
];


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
        <h2>Mas Productos</h2>
        <TarjetaProducto nombre="Producto 1" precio={1.200} />
        <TarjetaProducto nombre="Producto 2" precio={1.500} />
        <TarjetaProducto nombre="Producto 3" precio={2.100} />
        <h1>Peliculas</h1>
        <MovieListContainer Mensaje='Peliculas por año'></MovieListContainer>
        <h2>Empleados</h2>
        <ListaEmpleados empleados={empleados} />
      </Layout>
    </div>
  )
  
}

export default App