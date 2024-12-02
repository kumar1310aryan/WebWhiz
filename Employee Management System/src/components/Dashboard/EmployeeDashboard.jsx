import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-10 bg-black text-white h-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
