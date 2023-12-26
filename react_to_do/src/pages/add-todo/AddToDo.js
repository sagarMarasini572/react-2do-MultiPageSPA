import { useRef } from "react";
import NavBar from "../NavBar";
import { useHistory } from "react-router-dom";
import AuthCheck from "../../middleware/AuthCheck";

const AddToDo = () => {
  // Create useRef object
  const todoText = useRef();
  // Get the history object
  const history = useHistory();

  // authcheck
  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;

    const initalTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initalTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initalTodo));
    // Using the history.push method to navigate to a inital page
    history.push("/");
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h1>
          Add to-do: <br />
        </h1>
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
