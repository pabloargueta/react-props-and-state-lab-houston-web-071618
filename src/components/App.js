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


  onChangeType = (event) => {
    // console.log(event.target.value)
    this.setState({
      filters: {
        ...this.state.filters, type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let uRL = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    fetch(uRL)
      .then(resp => resp.json())
      .then(filteredPets => this.setState({
        pets: filteredPets
      }))
  }

  onAdoptPet = (id) => {
    this.setState(state => {
      let currentPet = this.state.pets.find(pet => (pet.id === id))

      currentPet.isAdopted = !currentPet.isAdopted

      return state
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
