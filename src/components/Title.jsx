import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="text">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
