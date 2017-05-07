import React from 'react';
import { connect } from 'react-redux';

import { onRatingChange } from '../actions/galleryActions';

function SortPane({ ratings = [], onRatingChange}) {
    return (
        <div className="cp-sort-pane">
            <div className="cp-sort-pane-caption">
                <h3 className="cp-sort-pane-caption-text">Filters:</h3>
            </div>
            <div className="cp-sort-pane-rating">
                <span className="cp-sort-pane-rating-caption">Rating:</span>
                <select
                    onChange={ event => onRatingChange(event.target.value) }
                    >
                    <option value="all">All</option>
                    {ratings.map((rating, index) =>
                        <option key={ index } value={ rating }>{ rating }</option>
                    )}
                </select>
            </div>
        </div>
    );
}

SortPane.propTypes = {
    onRatingChange: React.PropTypes.func.isRequired
}

export default connect(null, { onRatingChange })(SortPane);
