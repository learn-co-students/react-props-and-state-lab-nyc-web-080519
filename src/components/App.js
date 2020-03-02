import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updatePetType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  getPets = () => {
    if (this.state.filters.type === 'all') {
      this.fetchPets()
    } else {
      this.fetchPets(this.state.filters.type)
    }
  }

  fetchPets = petType => {
    let queryString = petType ? `?type=${petType}` : ''

    fetch(`/api/pets${queryString}`)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({ pets })
    })
  }

  adoptPet = id => {
    let pets = this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.updatePetType}
                onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
