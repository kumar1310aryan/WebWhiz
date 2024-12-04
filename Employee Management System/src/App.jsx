import { useEffect } from "react";
import Login from "./components/Auth/Login";
import { getLocalStorage } from "./utils/localStorage";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
