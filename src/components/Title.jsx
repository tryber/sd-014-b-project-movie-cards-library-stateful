import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
