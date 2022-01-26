import { useState, createContext } from 'react';

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props: any) => {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData: any) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext: any = {
    auth,
    login,
    logout,
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};
