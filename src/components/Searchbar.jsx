import React, { Component } from 'react';


export class Searchbar extends Component {
  render() {
    const {onSubmit, handleInput}=this.props
    return (
        <header className="Searchbar">
        <form className="SearchForm">
          <button type="button" className= "SearchForm-button" onClick={onSubmit}>
            <span className="SearchForm-button">Search</span>
          </button>
      
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            
            onChange={handleInput}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar