import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <section className="form-body">
        <Form
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
          onClick={ () => {
            onClick(this.state);
            this.setState({
              title: '',
              subtitle: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
        />
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  // resetState: PropTypes.func.isRequired,
};

export default AddMovie;
