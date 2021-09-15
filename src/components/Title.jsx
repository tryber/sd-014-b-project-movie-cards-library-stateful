import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="title">
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
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

// A Bel me ajudou nessa parte porque havia esquecido dos names dos inputs.
