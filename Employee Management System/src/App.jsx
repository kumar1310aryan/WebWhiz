import { useState } from "react";
import Login from "./components/Auth/Login";
// import { getLocalStorage } from "./utils/localStorage";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

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

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
