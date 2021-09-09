import React from 'react';
import PropTypes from 'prop-types';

export default class AddSinopse extends React.Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={ dfValue }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddSinopse.propTypes = {
  dfValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
