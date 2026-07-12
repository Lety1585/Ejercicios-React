import Movie from './Movie'

function MovieList({peliculas}) {
    return(
        <div style={{ display: 'flex', gap: '20px'}}>
            {peliculas.map(peli => (
                <Movie key={peli.id} {...peli} />
            ))}
        </div>
    );
}

export default MovieList;