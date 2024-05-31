import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import Delete from "./components/Delete";
import Patch from "./components/Patch";
import Put from "./components/Put";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));

    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then(
        axios.spread((todos, posts, users) => {
          console.log(todos.data);
          console.log(posts.data);
          console.log(users.data);
        })
      );
  }, []);

  return (
    <>
      <div>
        <Post />
      </div>
      <div>
        <Patch />
      </div>
      <div>
        <Put />
      </div>
      <div>
        <Delete />
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
