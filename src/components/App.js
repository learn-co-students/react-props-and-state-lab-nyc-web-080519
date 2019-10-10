import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    } 
  }


  onFindPetsClick =()=> {
    // fetch list of pets
    if (this.state.filters.type !== "all") {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data    }))
    } else {
      fetch(`/api/pets`)
        .then(resp => resp.json())
        .then(data => this.setState({
          pets: data    }))
    }
  }

  adoptPet=(petOBJ)=>{
    let petsArrCopy = [...this.state.pets]
    let newPet = petsArrCopy.find(pet => pet.id === petOBJ.props.pet.id)
    newPet.isAdopted = true
    this.setState({
      pets: petsArrCopy
    })
  }

  onChangeType = (searchTerm)=> {
    let copyObj = {...this.state.filters}
    copyObj.type = searchTerm
    this.setState({
      filters: copyObj
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
              <Filters key={"filters"} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser key={"browsers"} pets={this.state.pets} adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
