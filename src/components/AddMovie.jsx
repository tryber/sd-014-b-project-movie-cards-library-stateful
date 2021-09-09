import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="title-input-label">
        <label htmlFor="title">
          Título
          <input type="text" data-testid="title-input" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
