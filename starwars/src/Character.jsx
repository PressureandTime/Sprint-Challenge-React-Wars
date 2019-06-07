import React from 'react';


class Character extends React.Component {

  constructor() {
    super();
  }


  render() {

    return (

      <div>
        {this.props.character.name}
        {this.props.character.height}
        {this.props.character.mass}
        {this.props.character.hair_color}
        {this.props.character.slin_color}
      </div>
    );

  }


}


export default Character;
