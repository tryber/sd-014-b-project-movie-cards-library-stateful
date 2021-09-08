import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  reder() {
    const { onClick } = this.props;

    return (
      <div>
        asdf
      </div>
    );
  }
}

export default AddMovie;
