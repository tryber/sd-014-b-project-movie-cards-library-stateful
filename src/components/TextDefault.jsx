import React from 'react';




<form data-testid="add-movie-form">
        <InputTexts
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <TextArea
          storyline={ storyline }
          onChange={ this.handleChange }
        />