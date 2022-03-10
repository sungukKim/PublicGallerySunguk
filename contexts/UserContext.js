import React, {useContext, createContext, useState} from 'react';

const UserContext = createContext(null);

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      children={children}
      value={{
        user,
        setUser,
      }}
    />
  );
}

export function useUserContext() {
  // eslint-disable-next-line no-shadow
  const useUserContext = useContext(UserContext);
  if (!useUserContext) {
    throw new Error('UserContext.Provider is not found');
  }
  return UserContext;
}
