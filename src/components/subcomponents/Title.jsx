import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
