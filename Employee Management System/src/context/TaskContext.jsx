import PropTypes from "prop-types";
function TaskContext({ children }) {
  return <div>{children}</div>;
}

TaskContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskContext;
