import React from 'react'
import { useCurrentUser } from '../../context/CurrentUserContext'
import { useUserProfile } from "../../context/UserProfileContext";
import HomeLoggedOut from '../../components/HomeLoggedOut';
import HomeLoggedIn from '../../components/HomeLoggedIn';

const HomePage = () => {
    const currentUser = useCurrentUser();
    const { userProfile } = useUserProfile();


  return (
    <div>
        {!currentUser ? <HomeLoggedOut /> : userProfile ? <HomeLoggedIn userProfile={userProfile}/> : <p>Loading...</p>}
    </div>
  )
}

export default HomePage