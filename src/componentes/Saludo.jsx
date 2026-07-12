//function Saludo () {
//    return(
//        <p>Bienvenido a React</p>
//    )
//}

//export default Saludo;

// props es un OBJETO que contiene todo lo que le pasamos al componente
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

export default Saludo;

// ❌ Ejercicio 4 - Sin destructuring
// function Saludo(props) {
//   return <h1>Hola, {props.nombre}</h1>;
//                  ↑
//              hay que poner props.
// }

// ✅ Ejercicio 5 - Con destructuring
// function Saludo({ nombre }) {
//               ↑
//    extraemos nombre directamente
//   return <h1>Hola, {nombre}</h1>;
//                    ↑
//              más limpio y directo
// }