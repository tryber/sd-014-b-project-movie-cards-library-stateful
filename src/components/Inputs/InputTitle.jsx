import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="titleMovie" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="titleMovie"
          type="text"
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
