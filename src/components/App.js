import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const URL = "/api/pets";

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

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(petsApi => {
      this.setState({ pets: petsApi})
    })
  }

  adoptPet = (petId) => {
    let newPets = [...this.state.pets];
    let adoptedPet = newPets.find(pet => pet.id === petId);
    adoptedPet.isAdopted = true;
    this.setState({ pets: newPets})
  }

  filterPet = (e) => {
    let newFilters = {...this.state.filters}
    newFilters.type = e.target.value
    this.setState({ filters: newFilters})
  }

  fetchFilterPet = () => {
    let newURL
    if (this.state.filters.type === 'all'){
      newURL = URL
    } else {
      newURL = URL + '?type=' + this.state.filters.type
    }
    fetch(newURL)
    .then(resp => resp.json())
    .then(typePets => {
      this.setState({ pets: typePets})
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
              <Filters onChangeType={this.filterPet} onFindPetsClick={this.fetchFilterPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
