import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render(props) {
    let filteredArray = this.props.pets.filter(petObj => petObj.type === this.props.filterType)
    let petArray = this.props.filterType === 'all' ? this.props.pets.map(petObj => <Pet key = {petObj.id} petInfo = {petObj} onClick = {this.props.onClick}/> ) : filteredArray.map(petObj => <Pet key = {petObj.id} petInfo = {petObj} onClick = {this.props.onClick}/>)
    return (
      <div className="ui cards">
        {petArray}
      </div> 
    )
  }
}

export default PetBrowser
