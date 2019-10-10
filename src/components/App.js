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
    let apiParam 
    this.state.filters.type === "all" ? apiParam = "" : apiParam = `?type=${type}` 
    fetch(`/api/pets${apiParam}`)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  onChangeType = (e) => {
    //this should update state to the new type
    let newFilters = {type: e.target.value}
    this.setState({
      filters: newFilters
    })
  }

  // handleFilterSubmit = () => {
    // let newFilters = {type: type}
    // this.setState({
    //   filters: newFilters
    // })
    // this.fetchFilteredPets(this.state.filters.type)
  // }

  onFindPetsClick = () => {
    this.fetchFilteredPets(this.state.filters.type)
  }

  onAdoptPet = (id) => {
    let newPets = [...this.state.pets]
    let foundPet = newPets.find(pet => {
      return pet.id === id
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={petsArray} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
