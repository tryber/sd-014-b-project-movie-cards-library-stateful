import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class StandardButton extends Component {
  constructor(props) {
    super(props);
    this.avoidSubmit = this.avoidSubmit.bind(this);
  }

  avoidSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { propsInfoArray } = this.props;
    const array = propsInfoArray;

    return (
      <button
        type="submit"
        data-testid={ array[1] }
        onClick={ (event) => {
          this.avoidSubmit(event); array[2](array[3]); array[4]();
        } }
      >
        { array[0] }
      </button>
    );
  }
}

StandardButton.propTypes = {
  propsInfoArray: PropTypes.array,
}.isRequired;

export default StandardButton;
