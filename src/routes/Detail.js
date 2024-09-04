import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const APIURL = "https://yts.mx/api/v2/movie_details.json?movie_id=";
  const [movie, setMovie] = useState("");
  const ref = useRef(false);
  const getMovie = async () => {
    const json = await (await fetch(APIURL + id)).json();
    // console.log(json.data.movie.title);
    setMovie(json.data.movie.title);
  };
  useEffect(() => {
    if (!ref.current) {
      console.log(`getMovie() ${id}`);
      ref.current = true;
      getMovie();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>
        Detail: {id}: {movie}
      </h1>
      <Link to={"/"}>&rarr; Go to home</Link>
    </div>
  );
}

export default Detail;
