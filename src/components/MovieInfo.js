import PropTypes from "prop-types";
import styles from "./MovieInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieInfo({
  moviePoster,
  title,
  year,
  rating,
  description,
  genres,
  runtime,
}) {
  return (
    <div className={styles.movie_container}>
      <img className={styles.movie_poster} src={moviePoster} />
      <div className={styles.movie_info}>
        <h2 className={styles.movie_title}>{title}</h2>
        <span className={styles.movie_year}>{year}</span>
        <span className={styles.movie_rating}>
          <FontAwesomeIcon icon={faStar} className={styles.movie_rating_icon} />
          {rating}
        </span>
        <span className={styles.movie_runtime}>{runtime} minutes</span>
        <ul className={styles.movie_genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className={styles.movie_description}>{description}</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieInfo;
