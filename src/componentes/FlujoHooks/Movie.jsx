export function Movie({titulo, año}) {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>Año de estreno: {año}</p>
        </div>
    );
        
}

export default Movie;