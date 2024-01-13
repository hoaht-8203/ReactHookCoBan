import React from 'react';
import useUser from './useUser';

function Navigation(props) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);

  const [user, changeUserName] = useUser();

  return (
    <div>
      Navigation {user?.name}
      <button onClick={() => changeUserName('New name')}>Change user name</button>
    </div>
  );
}

export default Navigation;
