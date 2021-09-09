import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <label htmlFor data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
