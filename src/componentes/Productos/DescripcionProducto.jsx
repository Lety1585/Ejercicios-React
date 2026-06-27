export function DescripcionProducto() {
  const nombre = "Auriculares Bluetooth";
  const descripcion = "Auriculares Inalámbricos Micrófono Vincha Bluetooth 5.3 Largo Alcance Alta Fidelidad Entrada Auxiliar";

  return (
    <div style={{ marginBottom: "10px" }}>
      <h2 style={{ fontSize: "18px", margin: "0 0 6px 0" }}>{nombre}</h2>
      <p style={{ margin: 0, color: "#555", lineHeight: 1.4 }}>
        {descripcion}
      </p>
    </div>
  );
}

export default DescripcionProducto;