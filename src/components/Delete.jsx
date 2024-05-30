import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");

  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Delete;
