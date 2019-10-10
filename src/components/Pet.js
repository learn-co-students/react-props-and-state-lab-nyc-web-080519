import React from 'react'

const Pet = (props) => {
  
  let showGender = () => {
    if (props.pet.gender === 'male'){
      return '♂'
    } else if (props.pet.gender === 'female'){
      return '♀'
    }
  }

  let showAdoptionStatus = () => {
    if (props.pet.isAdopted){
      return (<button className="ui disabled button">Already adopted</button>)
    } else {
      return (<button className="ui primary button" onClick={() => props.onAdoptPet(props.pet.id)}>Adopt pet</button>)
    }
  }
  
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          {props.pet.name}
          &nbsp;&nbsp;
          {showGender()}
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
        {showAdoptionStatus()}
      </div>
    </div>
  )
}


export default Pet
