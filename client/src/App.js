import React, {useEffect, useState} from 'react';
import { getGuests, deleteGuestAPI } from './components/GuestService';
import GuestList from './components/GuestList';
import { CheckinForm } from './components/CheckinForm';
import GuestItem from './components/GuestItem';
import styled from 'styled-components'

function App() {

  const [guests, setGuests] = useState([])

  useEffect(() => {
    getGuests()
    .then(data => {
      console.log(data);
      setGuests(data)});
  }, []);

  const addGuest = (guest) => {
    let tempGuests = [...guests, guest]
    setGuests(tempGuests);
  }

  const deleteGuest = (id) => {
    deleteGuestAPI(id)
    .then(() => {
      let copyGuests = [...guests]
      copyGuests.splice(id, 1)
      setGuests(copyGuests)
    });

  }

  return (
    <AppContainer>
        <h1>Hotel App</h1>
        <CheckinForm addGuest={addGuest}/>
        <GuestList guests={guests} deleteGuest={deleteGuest}  />
    </AppContainer>

  );
}


export default App;


const AppContainer = styled.div`
  padding: 400px,
`