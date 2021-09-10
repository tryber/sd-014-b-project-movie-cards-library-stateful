import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
