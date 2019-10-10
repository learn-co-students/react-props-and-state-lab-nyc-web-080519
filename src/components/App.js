import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { timingSafeEqual } from 'crypto'

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

  handleFilterChange = (e) => {
    let newType = e.target.value
    let newFilters = {...this.state.filters, type: newType}
    this.setState({
      filters: newFilters
    })
  }

  handlePetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== "all") {
      url += "?type=" + this.state.filters.type
    }
    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({
      pets: pets
    }))
  }

  handleAdoptPet = (id) => {
    let petsCopy = [...this.state.pets]
    let foundPet = petsCopy.find(pet => pet.id === id)
    foundPet.isAdopted = !foundPet.isAdopted
    this.setState({
      pets: petsCopy
    })
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
              <Filters onChangeType={this.handleFilterChange} onFindPetsClick={this.handlePetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
