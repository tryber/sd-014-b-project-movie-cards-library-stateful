import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <label htmlFor="input-label-one" data-testid="title-input-label">
        Título
        <input
          id="input-label-one"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ title }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputTitle;
