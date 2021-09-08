import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class TitleComponent extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <FormInput
        text="Título"
        labelId="title-input-label"
        myName="title"
        myValue={ value }
        dataId="title-input"
        callback={ callback }
        myType="text"
      />
    );
  }
}

TitleComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TitleComponent;
