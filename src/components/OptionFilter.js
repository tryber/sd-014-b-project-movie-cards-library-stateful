import React from 'react';

class OptionFilter extends React.Component {
  render() {
    return (
      <>
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </>
    );
  }
}

export default OptionFilter;
