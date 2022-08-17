import React from 'react'

const GuestItem = ({guest, index, deleteGuest}) => {

  const handleClick = (event) => {
    deleteGuest(event.target.value)

  }

  return (
    <>
    <h2> {guest.name}</h2>
    <p>{guest.email}</p>
    <button value={index} onClick={handleClick}>Delete</button>
    </>
  )
}

export default GuestItem;