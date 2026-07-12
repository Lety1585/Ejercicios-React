// Con múltiples props y destructuring
function Saludo2({ nombre, edad, ciudad }) {
  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <p>Tenés {edad} años</p>
      <p>Vivís en {ciudad}</p>
    </div>
  );
}

export default Saludo2;