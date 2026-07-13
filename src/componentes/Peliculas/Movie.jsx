import { useState } from "react";

export function Movie({titulo, año}) {

    const [esFavorito, setEsFavorito] = useState(false)

    const VerClick = () => {
    alert(`Estas viendo ${titulo}`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito (esFavorito)
    }

    return (
        <div>
            <h3>{titulo}</h3>
            <span
                onClick={marcarComoFavorito}
            >
                {esFavorito ? "⭐" : "☆"}</span>
            <p>Año de estreno: {año}</p>
            <button onClick={VerClick}>Ver</button>
        </div>
    );
        
}

export default Movie;