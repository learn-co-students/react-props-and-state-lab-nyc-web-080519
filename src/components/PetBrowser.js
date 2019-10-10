import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props.pets)
    return <div className="ui cards">{this.makePets()}</div>
  }

  makePets = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} {...pet} onAdoptPet={this.props.onAdoptPet}/>)
  }

}

export default PetBrowser
