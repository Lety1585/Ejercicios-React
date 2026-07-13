import MovieList from './MovieList'
import styles from './MovieListContainer.module.css'

function MovieListContainer({ Mensaje, Disponibles }) {
    const peliculas =[
        {id: '1', titulo: '9 reinas', año: '2000', disponible: true},
        {id: '2', titulo: 'Scream', año: '1998', disponible: false},
        {id: '3', titulo: 'Matrix', año: '1999', disponible: true}

    ]

    const peliculasDisponibles = Disponibles ? peliculas.filter(
    (pelicula) => pelicula.disponible === true) : peliculas

  return (
    <div className={styles.peliculas}>
      <h2 className={styles.mensaje}>{Mensaje}</h2>
    {peliculasDisponibles.length === 0 
          ? <p>No hay películas disponibles</p>
          : <MovieList peliculas={peliculasDisponibles} />
        }
    </div>
  );
}

export default MovieListContainer;