import ImagenProducto from "./ImagenProducto";
import DescripcionProducto from "./DescripcionProducto";
import PrecioProducto from "./PrecioProducto";
import styles from "./Producto.module.css"

export function Producto() {
  return (
    <div className={styles.card}>
      <ImagenProducto />
      <div className={styles.card}>
        <DescripcionProducto />
        <PrecioProducto />
        
        <button>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Producto;