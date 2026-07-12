import Empleado from "./Empleado";

function ListaEmpleados({ empleados }) {
  return (
    <div>
      <h1>Lista de Empleados</h1>

      {empleados.map((empleado) => (
        <Empleado
          key={empleado.nombre}
          nombre={empleado.nombre}
          edad={empleado.edad}
          profesion={empleado.profesion}
        />
      ))}

    </div>
  );
}

export default ListaEmpleados;