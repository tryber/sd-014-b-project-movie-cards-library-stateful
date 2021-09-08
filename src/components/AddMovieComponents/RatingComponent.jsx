import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class RatingComponent extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <FormInput
        text="Avaliação"
        labelId="rating-input-label"
        myName="rating"
        myValue={ value }
        dataId="rating-input"
        callback={ callback }
        myType="number"
      />
    );
  }
}

RatingComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default RatingComponent;
