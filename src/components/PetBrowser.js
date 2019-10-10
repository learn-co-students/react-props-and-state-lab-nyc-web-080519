import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petsArr = this.props.pets.map(petOBJ => <Pet key={petOBJ.id} pet={petOBJ} adoptPet={this.props.adoptPet} />)
    return (
      <div className="ui cards">
        {petsArr}
      </div>
    )
  }
}

export default PetBrowser
