export function TarjetaProducto({ nombre, precio }) {

    return (
        <div>
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
        </div>
    )
}

export default TarjetaProducto;