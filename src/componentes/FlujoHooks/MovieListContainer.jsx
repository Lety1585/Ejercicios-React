import MovieList from './MovieList'

function MovieListContainer({ Mensaje }) {
    const peliculas =[
        {id: '1', titulo: '9 reinas', año: '2000', disponible: true},
        {id: '2', titulo: 'Scream', año: '1998', disponible: false},
        {id: '3', titulo: 'Matrix', año: '1999', disponible: true}

    ]
    
  return (
    <div>
      <h2>{Mensaje}</h2>
      <div>
        <MovieList peliculas={peliculas} />
      </div>
    </div>
  );
}

export default MovieListContainer;