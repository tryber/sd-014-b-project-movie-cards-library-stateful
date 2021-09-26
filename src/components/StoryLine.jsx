import React from 'react';
import PropTypes from 'prop-types';

class Synopsis extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ onChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

Synopsis.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Synopsis;
