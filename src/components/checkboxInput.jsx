import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxInput extends React.Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="2">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          name="bookmarkedOnly"
        />
      </label>
    );
  }
}
CheckBoxInput.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}.isRequired;

export default CheckBoxInput;
