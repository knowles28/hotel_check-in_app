import React from 'react'
import GuestItem from './GuestItem'

const GuestList = ({guests, deleteGuest}) => {

  const guestNodes = guests.map((guest, i) => {
    // if (!guests) return <p>Loading</p>
    return (
      <>
        <GuestItem guest={guest} key={guest._id} deleteGuest={deleteGuest} index={i}  />
        <hr/>
      </>
    )
  });

  return (
    <div>
      {guestNodes}
    </div>
    
  )
}

export default GuestList;