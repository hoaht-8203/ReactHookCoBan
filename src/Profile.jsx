import React, { useContext } from 'react';
import { UserContext } from './User';

function Profile() {
  const { firstName, age, address } = useContext(UserContext);

  return (
    <ul>
      <li>First Name: {firstName}</li>
      <li>Age: {age}</li>
      <li>Nation: {address.nation}</li>
      <li>Street: {address.city.street}</li>
      <li>Area: {address.city.area}</li>
    </ul>
  );
}

export default Profile;
