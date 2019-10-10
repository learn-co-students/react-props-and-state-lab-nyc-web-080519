import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
  let mapPets = props.pets.map(pet => <Pet onAdoptPet={props.onAdoptPet} key={pet.id} pet={pet}/>) ;
  return <div className="ui cards">{mapPets}</div>
}

export default PetBrowser
