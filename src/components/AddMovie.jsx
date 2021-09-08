// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onclick } = this.props;
    return (
      <form action="" data-testid="add-movie-form" />
    );
  }
}

export default AddMovie;

/**
Requisito 6: devemos setar o estado inicial, com isso abrimos o constructor recebendo props
super para alterar o padrão recebendo as props
setamos o valor inicial dentro do this.state
dentro do render fazemos o formulário com a callback onclick ja no ponto de uso.
Requisito 7: só adicionar o atributo
*/
