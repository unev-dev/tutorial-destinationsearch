import './index.css'

import {Component} from 'react'

import DestinationIteam from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchInput} = this.state
    const lowSearchInput = searchInput.toLowerCase()
    const finalOne = initialDestinationsList.filter(each =>
      each.name.toLowerCase().includes(lowSearchInput),
    )
    console.log(finalOne)

    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="searchitem">
          <input
            type="search"
            className="searchbar"
            onChange={this.searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchicon"
          />
        </div>
        <ul className="bgone">
          {finalOne.map(each => (
            <DestinationIteam dItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
