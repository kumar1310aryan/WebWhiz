function TaskListNumber() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {["New Task", "In Progress", "Completed", "On Hold"].map((title, idx) => (
        <div
          key={idx}
          className="p-6 rounded-lg bg-gray-800 text-white text-center"
        >
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-lg font-light mt-2">{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TaskListNumber;
