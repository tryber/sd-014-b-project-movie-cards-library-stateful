import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();


    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
    
    this.handleChange = this.handleChange.bind(this);

    handleChange(event) {
      this.setState({
        title: event.target.value,
      });
    }
  }
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
        Título:
          <input data-testid="title-input" onChange={this.handleChange} type="text" value={this.state.title} />
        </label>

      </form>
    )
  }
}

export default AddMovie;
