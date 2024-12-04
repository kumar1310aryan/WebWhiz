import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
// import { getLocalStorage } from "./utils/localStorage";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345678") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "12345678") {
      setUser("employee");
    } else {
      alert("invalid credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
