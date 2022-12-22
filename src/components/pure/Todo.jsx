import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, id, title }) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          textDecorationColor: completed ? "green" : "none",
          Color: completed ? "green" : "white",
        }}
      ></li>
    </div>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
