import React, {useState} from 'react'
import { postGuest } from './GuestService'

export const CheckinForm = ({addGuest}) => {

  const [newGuestData, setNewGuestData] = useState({})

  const onSubmit = (event) => {
    event.preventDefault();
    postGuest(newGuestData)
    .then((data) => {
      addGuest(data)
    });

  }

  const onChange = (event) => {
    newGuestData[event.target.id] = event.target.value;
    setNewGuestData(newGuestData);
  }


  return (
    <>
    <h3>Add New Guest:</h3>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={onChange} required></input>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email"onChange={onChange} required></input>

      <input type="submit" id="save" value="save"></input>
    </form>
    </>
  )
}
