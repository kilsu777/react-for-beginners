import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const APIURL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&limit=50";
    const ref = useRef(false);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      console.log("fetch");
      const json = await (
        await fetch(APIURL)
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      if (!ref.current) {
        ref.current = true;
        getMovies();
      }
    }, []);
    console.log(movies);
    return (
      <div>
        {loading ? (
          <h1>Now Loading...</h1>
        ) : (
          <div>
            <h3>Total movies: {movies.length}</h3>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );  
}

export default Home;
