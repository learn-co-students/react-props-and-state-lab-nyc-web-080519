import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    // console.log("props =", this.props.pets)
    let petsArray = this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} adoptPet={this.props.adoptPet}/>)
    return <div className="ui cards">{petsArray}</div>
  }
}

export default PetBrowser
