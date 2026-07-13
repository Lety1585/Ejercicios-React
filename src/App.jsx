import './App.css';
import Layout from './componentes/Layout';
import { FormularioContainer } from './componentes/Form/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import TarjetaProducto from './componentes/Productos/TarjetaProducto';
import MovieListContainer from './componentes/Peliculas/MovieListContainer';

// function App() {
//   return (
//     <Layout>
//       <FormularioContainer />
//     </Layout>
//   );
// }

function App() {
  return (
    <Routes>{}
      <Route element={<Layout />}>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path='/producto' element={<TarjetaProducto nombre='remera' precio='150' />} />
        
        <Route path='/peliculasdisp' element={<MovieListContainer Disponibles={true}/>} />
        <Route path='/formulario' element={<FormularioContainer />} />
      </Route>
    </Routes>);
}

export default App