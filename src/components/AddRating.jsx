import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddRating extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ initialState }
          onChange={ (event) => { onChange(event); } }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  initialState: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
