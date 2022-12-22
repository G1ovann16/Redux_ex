import "./App.css";
import TodoContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";

function App() {
  return (
    <div className="App">
     <TodoContainer></TodoContainer>
     <TodoFormContainer></TodoFormContainer>
    </div>
  );
}

export default App;
