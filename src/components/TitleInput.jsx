import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="inputTitle">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="inputTitle"
          type="text"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
