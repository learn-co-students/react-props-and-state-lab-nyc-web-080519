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

  componentDidMount() {
    this.fetchPets()
    // this.state.filters.type === "all" ? this.fetchPets() : this.fetchFilteredPets(this.state.filters.type)
  }

  //fetch methods
  fetchPets = () => {
    fetch("/api/pets")
    .then(resp => resp.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  fetchFilteredPets = (type) => {
    let apiParam = `?type=${type}`
    // this.state.filters.type === "all" ? apiParam = `?type=${type}` : apiParam = null
    fetch(`/api/pets${apiParam}`)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  handleFilterSubmit = (type) => {
    let newFilters = {type: type}
    this.setState({
      filters: newFilters
    })
    this.fetchFilteredPets(type)
  }

  adoptPet = (sentPet) => {
    let newPets = [...this.state.pets]
    let foundPet = newPets.find(pet => {
      return pet === sentPet
    })
    foundPet.isAdopted = true
    this.setState({
      pets: newPets
    })
  }

  render() {
    
    let petsArray = this.state.pets
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFilterSubmit={this.handleFilterSubmit}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={petsArray} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
