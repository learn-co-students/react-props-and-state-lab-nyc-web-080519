import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petsArr = this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} adopt={this.props.adopt} />)
    return <div className="ui cards">{petsArr}</div>
  }
}

export default PetBrowser
