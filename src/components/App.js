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

  // componentDidMount = () => {
  //   this.fetchAll()
  // }

  // fetchAll = () => {
  //   fetch("/api/pets")
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     pets: data
  //   })
  //   )
  // }

  // onChangeType = (event) => {
  //   this.setState({
  //     filters: {
  //       type: event.target.value
  //     }
  //   })
  // }

  // onChangeType = (type) => {
  //   if (type === "all")
  //     {fetch("/api/pets")
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       pets: data
  //     })
  //     )
  //     }
  //   else {
  //     {fetch(`/api/pets?type=${type}`)
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       pets: data
  //     })
  //     )
  //     }
  //   }
  // }

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

  // onClick = (petId) => {
  //   const pets = this.state.pets.map(pet => {
  //     return pet.id === petId ? { ...pet, isAdopted: true } : pet;
  //   });
  //   this.setState({ pets });
  // }

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
              <Filters onChangeType={this.handleFilterChange} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={this.state.pets} onAdoptPet = {this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
