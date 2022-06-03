import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>the form {count} </h1>
      <button onClick={() => setCount(count + 2)}>More Ice Cream</button>
      <button onClick={() => setCount(count - 1)}>decrement Ice Cream</button>
    </div>
  );
}
