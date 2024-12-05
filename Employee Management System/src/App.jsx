import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
// import { getLocalStorage } from "./utils/localStorage";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345678") {
      setUser("admin");
    } else if (
      authData &&
      authData.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
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
