import React from 'react';
import PropTypes from 'prop-types';

class MovieSubtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitleInputLabel">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitleInput"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieSubtitle;
