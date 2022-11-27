import MovieCard from "../movies/movieCard";
import "./horzScrollStyle.scss";
  
const HorzView = ({movies, action}) => {
    return (
        <>
            <div className="container">
                {movies.map((m) => (
                    <div className="card" key={m.id}>
                        <MovieCard movie={m} action={action} />
                    </div>
                ))}
            </div>
        </>
      );
};

export default HorzView;