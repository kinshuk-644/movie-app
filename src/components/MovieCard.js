import React from "react";
import { render } from "react-dom";
import { addFavourite } from "../actions";

class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const { movie } = this.props;

        this.props.dispatch(addFavourite(movie));
    }

    handleUnfavouriteClick = () => {
        const { movie } = this.props;

        this.props.dispatch(addFavourite(movie));
    }

    render() {
        const { movie, isFavourite } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>

                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite ?
                            <button onClick={this.handleUnfavouriteClick} className="unfavourite-btn">Unfavourite</button>
                            :
                            <button onClick={this.handleFavouriteClick} className="favourite-btn">Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default MovieCard;