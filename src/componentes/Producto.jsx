import ImagenProducto from "./ImagenProducto";
import DescripcionProducto from "./DescripcionProducto";
import PrecioProducto from "./PrecioProducto";

export default function Producto() {
  return (
    <div>
      <ImagenProducto />
      <div>
        <DescripcionProducto />
        <PrecioProducto />
        
        <button>
          Comprar
        </button>
      </div>
    </div>
  );
}