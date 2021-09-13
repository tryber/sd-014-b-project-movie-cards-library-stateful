import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        input=
        { {
          ID: 'subtitle-input',
          name: 'subtitle',
          testID: 'subtitle-input',
          value,
          onChange: handleChange } }
      </div>
    );
  }
}

AddMovieSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieSubtitle;
