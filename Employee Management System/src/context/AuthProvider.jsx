import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
