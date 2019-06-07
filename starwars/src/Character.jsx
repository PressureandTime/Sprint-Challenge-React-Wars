import React from 'react';
import './Character.css';


class Character extends React.Component {

  constructor() {
    super();
  }


  render() {

    return (

      <div className="individual-character">
    

<p>Name: {this.props.character.name}</p>
<p>Mass: {this.props.character.mass}</p>
<p>Height: {this.props.character.height}</p>  
<p>Eye color:{this.props.character.eye_color} </p>
<p>Hair color:{this.props.character.hair_color} </p>
<p>Skin color:{this.props.character.skin_color}</p>


      </div>
    );

  }


}


export default Character;
