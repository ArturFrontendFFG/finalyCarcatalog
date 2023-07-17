import { createContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("dataUser")
      ? JSON.parse(localStorage.getItem(`dataUser`))
      : null
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
