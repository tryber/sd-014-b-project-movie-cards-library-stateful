import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="subTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          id="subTitle"
          type="text"
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputSubTitle;
