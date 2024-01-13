import { useEffect, useState } from 'react';
import { getUser } from '../api';

function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  const changeUserName = (val) => {
    setUser({
      ...user,
      name: val,
    });
  };

  return [user, changeUserName];
}

export default useUser;
