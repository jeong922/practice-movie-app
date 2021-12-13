import PropTypes from "prop-types";

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
    <div>
      <img src={moviePoster} />
      <h2>
        {title} ({year})
      </h2>
      <h3>⭐{rating}</h3>
      <h4>{runtime} minutes</h4>
      <p>{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
