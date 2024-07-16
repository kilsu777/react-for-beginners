import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const APIURL = "https://yts.mx/api/v2/movie_details.json?movie_id=";
    const ref = useRef(false);
    const getMovie = async () => {
        const json = await (
            await fetch(APIURL + id)
        ).json();
        console.log(json.data.movie.title);
    }
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
            getMovie();
        }
    }, []);
    return <h1>Detail: {id}</h1>;
}

export default Detail;
