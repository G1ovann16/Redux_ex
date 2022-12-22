import React from 'react'
import { connect } from "react-redux";
import TodoList from "../pure/TodoList";
import { toogleTodo } from "../../store/actions/actions";



const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed);

    default:
      return todos;
  }
};
const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toogleTodo(id));
    },
  };
};
 const TodoContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList)
 export default TodoContainer