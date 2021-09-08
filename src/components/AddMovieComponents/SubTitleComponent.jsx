import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class SubTitleComponent extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <FormInput
        text="Subtítulo"
        labelId="subtitle-input-label"
        myName="subtitle"
        myValue={ value }
        dataId="subtitle-input"
        callback={ callback }
        myType="text"
      />
    );
  }
}

SubTitleComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubTitleComponent;
