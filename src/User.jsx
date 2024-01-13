import React, { createContext, useEffect, useState } from 'react';
import UserProfile from './UserProfile';

const initialAddress = () => {
  return {
    nation: 'Viet Nam',
    city: {
      street: '57B, Thi Tran Lam, Y Yen, Nam Dinh',
      area: 'Phong toa',
    },
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Address 1', 'Address 2', 'Address 3', 'Address 4', 'Address 5']);
    }, 3000);
  });
};

export const UserContext = createContext();

const User = () => {
  const [name] = useState('Alex');
  const [age, setAge] = useState(23);
  const [, forceRender] = useState(0);
  const [address, setAddress] = useState(initialAddress);
  const [addressList, setAddressList] = useState([]);

  const increaseAge = () => {
    setAge((prevAge) => {
      return prevAge + 1;
    });
  };

  const reRender = () => {
    forceRender((prev) => prev + 1);
  };

  //   const changeCity = () => {
  //     setAddress({
  //       ...address,
  //       city: "Ha Noi",
  //
  //   };

  const changeCityArea = () => {
    setAddress({
      ...address,
      city: {
        ...address.city,
        area: 'Khong Phong Toa',
      },
    });
  };

  // giong componentDidUpdate, effect chay lai moi khi component re-render
  // useEffect(() => {
  // 	console.log('useEffect re-render');
  // 	console.log(document.getElementsByTagName('li'));
  // })

  // giong componentDidMount, effect chay duy nhat 1 lan
  // thuong dung de goi api
  useEffect(() => {
    console.log('useEffect with empty array!');

    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = {
          ...prevAddress,
          nation: res[0],
        };
        return newAddress;
      });
    });

    return () => {
      console.log('Huy goi API');
    };
  }, []);

  console.log('component re-render');

  return (
    <div>
      <button onClick={reRender}>Re-render</button>
      {/* <button onClick={changeCity}>Chang city to Ha Noi</button> */}
      <button onClick={changeCityArea}>Change area city</button>
      <br />
      {addressList ? JSON.stringify(addressList) : 'Loading...'}
      <br />
      <UserContext.Provider
        value={{
          address,
          age,
          name,
          increaseAge,
        }}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};

export default User;
