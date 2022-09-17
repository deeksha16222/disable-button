import React, { useState } from "react";

export default function Disable() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} /> <br />{" "}
      <br />
      <button disabled={value.length < 3}> submit </button>
    </div>
  );
}
