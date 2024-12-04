import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  return (
    <div>
      <AuthContext.Provider value={"Aryan"}>{children}</AuthContext.Provider>
    </div>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
