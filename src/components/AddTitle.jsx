import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Título" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddTitle;
