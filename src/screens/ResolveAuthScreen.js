import React from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const {tryLocalSignin} = React.useContext(AuthContext);
  React.useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
