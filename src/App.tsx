import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "blue", fontFamily: "serif", padding: 16 }}>
      <h1
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: 400,
          lineHeight: 1,
          marginBottom: 0,
          marginTop: 0,
          textShadow: "black 2px 0px",
        }}
      >
        Hello, World!
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{ appearance: "none" }}
      >
        {count}
      </button>
    </div>
  );
};
