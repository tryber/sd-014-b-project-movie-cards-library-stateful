import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title"
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
