import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div className="sinopse">
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;
