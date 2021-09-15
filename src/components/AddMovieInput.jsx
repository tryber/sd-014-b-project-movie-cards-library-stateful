import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInput extends React.Component {
  render() {
    const {
      value,
      onChange,
      dataId,
      dataIdLabel,
      content,
      html,
      name,
    } = this.props;
    return (
      <label data-testid={ dataIdLabel } htmlFor={ html }>
        { content }
        <input
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataId }
        />
      </label>
    );
  }
}

AddMovieInput.propTypes = {
  value: PropTypes.string,
  html: PropTypes.string,
  dataId: PropTypes.string,
  dataIdLabel: PropTypes.string,
  content: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

AddMovieInput.defaultProps = {
  value: PropTypes.string,
  html: PropTypes.string,
  dataId: PropTypes.string,
  dataIdLabel: PropTypes.string,
  content: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default AddMovieInput;
