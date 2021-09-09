import React from 'react';
import PropTypes from 'prop-types';

class Labels extends React.Component {
  render() {
    const { dataLabel, textLabel, dataInput, value, name, func } = this.props;
    return (
      <label data-testid={ dataLabel } htmlFor={ dataInput }>
        <h6>{ textLabel }</h6>
        <input
          data-testid={ dataInput }
          value={ value }
          name={ name }
          onChange={ func }
        />
      </label>
    );
  }
}

Labels.propTypes = {
  dataLabel: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Labels;
