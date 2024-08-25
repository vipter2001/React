"use client";
import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // change state to new value
  }

  return (
    <div>
    <button onClick={handleClick}>
      Click me
    </button>
    <p>the count is {count} </p>
    </div>
  );
}

