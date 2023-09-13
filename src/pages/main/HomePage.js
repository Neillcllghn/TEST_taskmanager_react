import React from 'react'
import { Container } from 'react-bootstrap';
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext'

const HomePage = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const homeLoggedOut = 
        <>
        <div>HomePage</div>
        </>

  return (
    <Container>
        {currentUser && homeLoggedOut}
    </Container>
  )
}

export default HomePage