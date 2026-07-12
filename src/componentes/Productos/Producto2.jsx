const producto2= {
  nombre: "Notebook",
  precio: 1200,
  categoria: "Tecnología"
};

export function Producto2(){
  const {nombre, precio} = producto2;
  console.log(nombre);
  console.log(precio);

  const numeros1 = [1, 2, 3];
  const numeros2 = [4, 5, 6];
  const todosLosNumeros = [...numeros1, ...numeros2];
  console.log(todosLosNumeros);

  const edades= [10, 20, 30, 40];
  const edadesDobles = edades.map((edad) => edad * 2);
  console.log(edadesDobles);
}


export default Producto2;