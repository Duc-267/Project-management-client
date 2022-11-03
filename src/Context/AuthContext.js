import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const loggedIn = JSON.parse(localStorage.getItem("loggedUser"));
const authState = {
  loggedUser: {
    token: null,
    fullName: null,
  },
  isAuthenticated: false,
};

function AuthProvider({ children }) {
  const [{ loggedUser, isAuthenticated }, setAuthState] = useState( loggedIn || authState );

  return (
    <AuthContext.Provider value={{ loggedUser, isAuthenticated, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
