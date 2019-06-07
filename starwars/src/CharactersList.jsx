import React from 'react';
import Character from './Character';

class CharactersList extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>

        {

        this.props.character.map(character => (

          <Character
            key={character.url}
            character={character}
            />
        ))

      }

      </div>

    );


  }


}

export default CharactersList;
