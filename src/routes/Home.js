import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const APIURL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&limit=50";
  const ref = useRef(false);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    console.log("fetch");
    const json = await (await fetch(APIURL)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    if (!ref.current) {
      console.log(`getMovies()`);
      ref.current = true;
      getMovies();
    }
  }, []);
  // console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Now Loading...</span>
        </div>
      ) : (
        <div>
          <center>
            <h4>Total movies: {movies.length}</h4>
          </center>
          <div className={styles.movies}>
            {movies ? movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            )) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
