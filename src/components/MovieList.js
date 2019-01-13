import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieList.css';
import MovieListItem from './MovieListItem';
import * as actions from '../actions';

class MovieList extends React.Component {
    state = {
        items: []
    };
    
    componentWillMount() {
        this.props.getList();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ items: nextProps.movieList });
    }

    filterList = (event) => {
        let updatedList = this.props.movieList;

        updatedList = updatedList.filter(e => {
            return e.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1; 
            });
        this.setState({ items: updatedList });
    }

    renderError() {
        // Check if there is an error, if so display it
        if (this.props.error) {
            return (
                <div>Error: {this.props.error}</div>
            )
        }
        // if there is no error, display nothing
        return null;
    };

    renderRows() {
        return _.map(this.state.items, movie => {
            return <MovieListItem key={movie.rank} movie={movie} />
        });
    }

    renderLoading() {
        if (this.props.loading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className="SearchBox">
                    <input 
                        type="text" 
                        onChange={this.filterList} 
                    />
                </div>
                <table className="ListTable">
                    <tbody>
                        <tr>
                            <td className="ColRank"><b>Rank</b></td>
                            <td className="ColTitle"><b>Title</b></td>
                            <td className="ColYear"><b>Year</b></td>
                        </tr>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderError()}
                {this.renderLoading()}
            </div>
        );
    }
};

MovieList.propTypes = {
    getList: PropTypes.func,
    error: PropTypes.string,
    loading: PropTypes.bool,
    //movieList: PropTypes.array
}

function mapStateToProps({ list }) {
    const { movieList, error, loading } = list;
    return { movieList, error, loading };
};

export default connect(mapStateToProps, actions)(MovieList);
