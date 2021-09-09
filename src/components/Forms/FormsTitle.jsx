import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsTitle extends Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label" >
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

FormsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FormsTitle;
