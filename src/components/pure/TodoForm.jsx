import React, { useRef } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ submit }) => {
  const newText = useRef();
  const createTodo = (e) => {
    e.preventDefault();
    submit(newText.current.value);
    newText.current.value = "";
  };
  return (
    <div>
      <form onSubmit={createTodo()}>
        <input type="text" ref={newText} />
        <button type="submit">
            create new Task
        </button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default TodoForm;
