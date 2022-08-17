import React from 'react'
import styled from 'styled-components'

const GuestItem = ({guest, index, deleteGuest}) => {

  const handleClick = (event) => {
    deleteGuest(event.target.value)

  }

  return (
    <Wrapper>
      <h2> {guest.name}</h2>
      <p>{guest.email}</p>
      <button value={index} onClick={handleClick}>Delete</button>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  background-color: #A188A6;
  padding: 30px;
  box-shadow: 20px 20px 20px #7F5A83;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* flex-grow:1; */
  &:hover {
      box-shadow: 20px 10px 10px #463248
  }

`
export default GuestItem;

