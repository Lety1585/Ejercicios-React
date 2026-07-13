
export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    console.log(datosForm);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #000',
        gap: '16px'
    };

    return (
        
        <form style={formStyle} onSubmit={manejarEnvio}>
            <h3>Agregar producto</h3>
            <div>
                <label>Nombre </label>
                <input type="text"
                    placeholder="Ej: Nombre del producto"
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio </label>
                <input type="number" 
                    placeholder="Precio del producto" 
                    name="precio" 
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock </label>
                <input type="number" 
                    placeholder="Numero de articulos" 
                    name="stock" 
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen </label>
                <input type="file" 
                    placeholder="https://..." 
                    name="imagen" 
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar producto</button>
        </form>
    );
}

export default FormularioProducto;