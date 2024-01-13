import React, { useContext } from 'react';
import Profile from './Profile';
import { UserContext } from './User';

const UserProfile = () => {
  const { increaseAge } = useContext(UserContext);
  return (
    <div>
      <h1>User Functional Component</h1>
      <Profile />
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
};

export default UserProfile;
