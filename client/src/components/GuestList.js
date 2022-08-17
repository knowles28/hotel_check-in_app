import React from 'react'
import GuestItem from './GuestItem'
import styled from 'styled-components'


const GuestList = ({guests, deleteGuest}) => {

  const guestNodes = guests.map((guest, i) => {
    // if (!guests) return <p>Loading</p>
    return (
      <GuestListContainer>
          <GuestItem guest={guest} key={guest._id} deleteGuest={deleteGuest} index={i}  />
      </GuestListContainer>
    )
  });

  return (
    <div>
      {guestNodes}
    </div>
    
  )
}

const GuestListContainer = styled.div`
    display: flex;
    background-color: #9DA2AB;
    justify-content:space-around;
    padding: 25px;
`

export default GuestList;