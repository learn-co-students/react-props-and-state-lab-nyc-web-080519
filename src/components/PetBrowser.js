import React from "react";
import Pet from "./Pet";
// import Filters from "./Filters"

function PetBrowser(props) {
  //this is returning an array of JSX components
  const petsArr = () => {
    return props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} adoptPet={props.adoptPet}/>);
  };

  return (
    <div className="ui cards">
      {/*this array is now rendered as components through REACT*/}
      {petsArr()}
    </div>
  );
}

export default PetBrowser;
