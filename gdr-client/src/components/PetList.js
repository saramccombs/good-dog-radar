import React from 'react'
import { connect } from 'react-redux'
import Pet from './Pet'

const PetList = (props) => {
  const myPets = props.pets.map(pet => <Pet pet={pet} key={pet.id} />)
  return (
  <div className="PetList">
    Your Fosters:
    { myPets }
  </div>
  )
}

const mapStateToProps = state => {
  return {
    pets : state.myPets
  }
}

export default connect(mapStateToProps)(PetList)

