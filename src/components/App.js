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

  fetchPets = () => {
    const API = "/api/pets" + (this.state.filters.type === "all" ? "" : `?type=${this.state.filters.type}`)
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ pets: data, filters: {type: this.state.filters.type} }))
  }


  componentDidMount(){
    fetch("/api/pets")
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
  }

  onChangeType = e => {
    let filters = {...this.state.filters}
    filters[e.target.name] = e.target.value
    this.setState({
      filters
    })
  }

  onAdoptPet = (pet) => {
    if(!pet.isAdopted){
      let pets = [...this.state.pets]
      let found = pets.find(petObj => petObj === pet)
      found.isAdopted = !found.isAdopted
      this.setState({
        pets
      })
    }
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
              <Filters change={this.onChangeType} submit={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adopt={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
