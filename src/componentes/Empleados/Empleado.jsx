function Empleado({ nombre, edad, profesion }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Profesión: {profesion}</p>
    </div>
  );
}

export default Empleado;