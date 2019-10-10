import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: "all"
    },
    selection: null
  };

  componentDidMount() {
    fetch("/api/pets")
      .then(resp => resp.json())
      .then(data => this.setState({ pets: data }));
  }

  //on submission of button we filter the pets
  petSubmitHandler = petType => {
    let selection = petType.value;
    this.setState({
      selection
    });
  };

  filterPets = () => {
    let type = this.state.selection;
    let newArr = [];

    if (type === "all") {
      newArr = this.state.pets;
    } else {
      newArr = this.state.pets.filter(petObj =>
        petObj.type.includes(this.state.selection)
      );
    }

    return newArr;
  };

  adoptPet = id => {
    let petsArrayCopy = [...this.state.pets]
    let matchingPet = petsArrayCopy.find(petObj => petObj.id === id);
    matchingPet.isAdopted = true 
    this.setState({
      pets: petsArrayCopy
    })
  };


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
                onChangeType={this.state}
                selection={this.state.selection}
                submitHandler={this.petSubmitHandler}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.filterPets()} adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
