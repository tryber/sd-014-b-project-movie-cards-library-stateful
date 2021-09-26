import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            value={ title }
            onChange={ onChange }
            name="title"
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
