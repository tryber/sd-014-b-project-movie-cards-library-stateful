import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
    constructor() {
      super()

      this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: ''
      };
    };
    render() {
        return (

        );
    }
}

AddMovie.propTypes = {
    onClick: PropTypes.func.isRequired,
}
