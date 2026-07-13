import React, { useState, useEffect } from "react";

function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/peliculas.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('Error de carga');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setPeliculas(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) {
        return <p>Cargando peliculas ...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <ul>
                {peliculas.map((pelicula) => (
                    <li key={pelicula.id}>
                        <h2>{pelicula.titulo}</h2>
                        <img src={pelicula.imagen} alt={pelicula.titulo} width='150' />
                        <p>Año de estreno: {pelicula.año}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Peliculas;