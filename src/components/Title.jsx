import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <div className="title">
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
