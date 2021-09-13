import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="sub">
          <input type="text" name="sub" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
