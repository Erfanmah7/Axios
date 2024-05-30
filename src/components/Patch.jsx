import axios from "axios";
import React, { useState } from "react";

function Patch() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const patchHandler = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
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
      <button onClick={patchHandler}>Patch</button>
    </div>
  );
}

export default Patch;
