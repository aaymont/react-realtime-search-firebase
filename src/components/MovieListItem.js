import React from 'react';
import PropTypes from 'prop-types';
import './MovieListItem.css';

class MovieListItem extends React.Component {
    render() {
        const { rank, title, year } = this.props.movie;
        return (
            <tr>
                <td className="ColRank">{rank}</td>
                <td className="ColTitle">{title}</td>
                <td className="ColYear">{year}</td>
            </tr>
        )
    }
}

MovieListItem.PropTypes = {
    rank: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.string,
    movie: PropTypes.array
}

export default MovieListItem;
