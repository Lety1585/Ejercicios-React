
export function Movie({titulo, año}) {
    const VerClick = () => {
    alert(`Estas viendo ${titulo}`);
    };

    return (
        <div>
            <h3>{titulo}</h3>
            <p>Año de estreno: {año}</p>
            <button onClick={VerClick}>Ver</button>
        </div>
    );
        
}

export default Movie;