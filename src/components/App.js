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

  componentDidMount = () => {
    this.fetchAll()
  }

  fetchAll = () => {
    fetch("/api/pets")
    .then(response => response.json())
    .then(data => this.setState({
      pets: data
    })
    )
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onClick = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
  }

  render() {
    // console.log(this.state.pets)
    console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={this.state.pets} filterType ={this.state.filters.type} onClick = {this.onClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
