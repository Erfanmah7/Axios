import axios from "axios";
import React, { useState } from "react";

function Put() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const postHandler = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
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
      <input
        type="text"
        placeholder="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={postHandler}>Put</button>
    </div>
  );
}

export default Put;
