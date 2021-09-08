import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, event } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ event }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default InputTitle;
