import React from 'react';
import { connect } from 'react-redux';

import { onRatingChange, onSortingChange } from '../actions/galleryActions';

class SortPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRating: 'All',
            currentSorting: 'Desc'
        };
        this.changeRating = this.changeRating.bind(this);
        this.changeSorting = this.changeSorting.bind(this);
    }

    changeRating(rating) {
        this.props.onRatingChange(rating);
        this.setState({
            currentRating: rating
        });
    }

    changeSorting(sorting) {
        this.props.onSortingChange(sorting);
        this.setState({
            currentSorting: sorting
        });
    }

    render() {
        return (
            <div>
                <div className="cp-sort-pane">
                    <div className="cp-sort-pane-caption">
                        <h3 className="cp-sort-pane-caption-text">Filters:</h3>
                    </div>
                    <div className="cp-dropdown">
                        <button className="cp-drop-button">Rating:&nbsp;{ this.state.currentRating }&nbsp;&nbsp;<i className="fa fa-chevron-down" aria-hidden="true"></i></button>
                        <div className="cp-dropdown-content">
                            <a onClick={ () => this.changeRating('All') }>All</a>
                            {this.props.ratings.map((rating, index) =>
                                <a key={ index } value={ rating } onClick={ () => this.changeRating(rating) }>{ rating }</a>
                            )}
                        </div>
                    </div>
                    <div className="cp-sort-pane-caption">
                        <h3 className="cp-sort-pane-caption-text">Sortings:</h3>
                    </div>
                    <button onClick={ () => this.changeSorting(this.state.currentSorting == 'Desc' ? 'Asc' : 'Desc') }>
                        Alphabetically:&nbsp;{ this.state.currentSorting }&nbsp;&nbsp; { this.state.currentSorting == 'Desc' ? <i className="fa fa-chevron-down" aria-hidden="true"></i> : <i className="fa fa-chevron-up" aria-hidden="true"></i> }
                    </button>
                </div>
            </div>
        );
    }
}

SortPane.propTypes = {
    onRatingChange: React.PropTypes.func.isRequired,
    onSortingChange: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    let { rating, sorting } = state;
    return {
        currentRating: rating,
        currentSorting: sorting
    };
}

export default connect(mapStateToProps, { onRatingChange, onSortingChange })(SortPane);
