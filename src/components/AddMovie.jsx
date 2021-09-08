// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form" />
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
