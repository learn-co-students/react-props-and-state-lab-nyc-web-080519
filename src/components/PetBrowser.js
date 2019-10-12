import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petMapper = () => {
    return this.props.pets.map((pet) => {
      return <Pet key={pet.id} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  render() {
    return <div className="ui cards">{this.petMapper()}</div>
  }
}

export default PetBrowser
