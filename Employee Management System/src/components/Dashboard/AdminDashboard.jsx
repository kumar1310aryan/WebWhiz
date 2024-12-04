import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

function AdminDashboard() {
  return (
    <div className="h-[120vh] w-full bg-black text-white p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
