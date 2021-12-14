import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import MovieInfo from "../components/MovieInfo";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.movie}>
      {loading ? (
        <h1 className={styles.loader}>Loading...😊</h1>
      ) : (
        <div className={styles.movie_info}>
          <MovieInfo
            key={movie.id}
            moviePoster={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            runtime={movie.runtime}
            rating={movie.rating}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
