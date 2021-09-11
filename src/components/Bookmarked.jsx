import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bookmarked extends Component {
  render() {
    const { checked, onChange } = this.props;

    return (
      <section className="field">
        <label
          className="label checkbox"
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
        >
          <input
            className="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="checkbox-input"
            checked={ checked }
            onChange={ onChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
      </section>
    );
  }
}

Bookmarked.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Bookmarked;
