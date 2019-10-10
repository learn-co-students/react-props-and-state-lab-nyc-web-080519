import React from "react";

//destructuring
const Pet = (props) => {

  const adoptHandler = (e) => {
    console.log("Clicking Adopt", props)
    props.adoptPet(props.pet.id)
  }

  return (
    <div className="card">
      <div className="content">
        <a className="header">
        {/*'♀' OR '♂' */}
          {props.pet.name}
        </a>
        <div className="meta">
          <span className="date">{props.pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {props.pet.age}</p>
          <p>Weight: {props.pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={adoptHandler} className="ui primary button">Adopt pet</button> }  
      </div>
    </div>
  );
};

export default Pet;
