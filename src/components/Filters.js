import React from 'react'

class Filters extends React.Component {
  searchingHandler = (searchTerm)=>{
    this.props.onChange(searchTerm)
  }

  collectionSelectionHandler = (e)=>{
    let searchTerm = e.target.value
    this.props.onChangeType(searchTerm)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.collectionSelectionHandler} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick} >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
