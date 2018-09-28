import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = (e) => {

    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
    }
  }
  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === 'female' ? '♀' : '♂'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}

        </div>
      </div>
    )
  }
}

export default Pet
