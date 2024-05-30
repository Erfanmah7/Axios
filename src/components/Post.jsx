import axios from "axios";
import React, { useState } from "react";

function Post() {
  const [text, setText] = useState("");

  const postHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { text })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={postHandler}>Post</button>
    </div>
  );
}

export default Post;
