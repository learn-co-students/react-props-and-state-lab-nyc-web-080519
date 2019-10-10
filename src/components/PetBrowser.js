import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    let petsArray = this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards">{petsArray}</div>
  }
}

export default PetBrowser
