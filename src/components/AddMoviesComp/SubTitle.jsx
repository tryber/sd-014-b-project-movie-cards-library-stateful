import PropTypes from 'prop-types';
import React from 'react';

class SubTitle extends React.Component {
  render() {
    const { subtitle, inputChange } = this.props;
    return (
      <label htmlFor="subtitleText" data-testid="subtitle-input-label">
        Subtítulo
        <input
          onChange={ inputChange }
          name="subtitle"
          type="text"
          id="subtitleText"
          value={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string,
  inputChange: PropTypes.func,
}.isRequired;

export default SubTitle;
