function CreateTask() {
  return (
    <div className=" max-w-[100%] mx-auto">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg flex justify-between">
        <div className="left w-1/2">
          {/* <h2 className="text-2xl font-semibold mb-6 text-center">
              CREATE TASK
            </h2> */}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Assign To</label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              placeholder="e.g., Design, Development"
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
        <div className="right w-2/5">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              cols="30"
              rows="8"
              placeholder="Describe the task details here..."
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg mt-6 transition-all duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
