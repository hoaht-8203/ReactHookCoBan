import React from 'react';
import useUser from './useUser';

function Cart(props) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);

  const [user] = useUser();

  return <div>Cart {user?.name}</div>;
}

export default Cart;
