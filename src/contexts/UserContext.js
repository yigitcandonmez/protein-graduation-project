import { createContext, useContext } from 'react';
import { useAuth } from './AuthContext';

const UserContext = createContext({});

function UserProvider({ children }) {
	return <UserContext.Provider value={useAuth().data}>{children}</UserContext.Provider>;
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
