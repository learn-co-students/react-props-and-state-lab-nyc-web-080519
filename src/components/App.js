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
    handleFilterChange = (e) => {
      const newFilters = { ...this.state.filters, type: e.target.value}
      this.setState({ filters: newFilters })
    }
    
    handlePetsClick = (e) => {
      let url = "/api/pets" 
      if (this.state.filters.type !== "all"){ url += "?type=" + this.state.filters.type}
      console.log(url)
      fetch(url)
      .then(response => response.json())
      .then(pets=> this.setState({
        pets
      }))
    }

    handleAdoptPet = (id) => {
      let petsCopy = [...this.state.pets]
      let foundPet = petsCopy.find(pet => pet.id === id)
      foundPet.isAdopted = !foundPet.isAdopted
      this.setState({
        pets:petsCopy
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
              <Filters onChangeType={this.handleFilterChange} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
