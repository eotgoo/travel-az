import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("haha");
  const login = () => {};
  const signup = () => {};
  const logout = () => {};

  return (
    <UserContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};
