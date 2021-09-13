import React from 'react';
import PropTypes from 'prop-types';

class Template extends React.Component {
  render() {
    const {
      input: { ID, name, testID, value, onChange, type = 'text' },
      label: { description, testIDLabel },
    } = this.props;
    return (
      <label htmlFor={ ID } data-testid={ testIDLabel }>
        { description }
        <input
          id={ ID }
          name={ name }
          data-testid={ testID }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Template.propTypes = {
  input: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    testID: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.shape({
    description: PropTypes.string.isRequired,
    testIDLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Template;
