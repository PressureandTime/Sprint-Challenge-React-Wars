import React from 'react';
import Character from './Character';
import './CharactersList.css';


class CharactersList extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="character-overview">

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
