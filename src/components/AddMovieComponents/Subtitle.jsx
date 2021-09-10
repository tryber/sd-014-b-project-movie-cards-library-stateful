import React from 'react';
import PropTypes from 'prop-types';
import Template from './InputTemplate';

class AddMovieSubtitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <Template
        input={ {
          ID: 'subtitle-input',
          name: 'subtitle',
          testID: 'subtitle-input',
          value,
          onChange: handleChange } }
        label={ { description: 'Subtítulo', testIDLabel: 'subtitle-input-label' } }
      />
    );
  }
}

AddMovieSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieSubtitle;
