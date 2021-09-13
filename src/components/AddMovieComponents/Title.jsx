import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        input=
        { {
          ID: 'title-input',
          name: 'title',
          testID: 'title-input',
          value,
          onChange: handleChange } }
        label=
        { { description: 'Título', testIDLabel: 'title-input-label' } }
      </div>
    );
  }
}

AddMovieTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieTitle;
