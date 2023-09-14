import { useState } from "react";

function IncrementCounter() {
    const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
    return (
      <div>
       
        <button onClick={() => setFontSize((size) => size + 1)}>
          Increase with click
        </button>
       
        <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      </div>
    );
  }
  export default IncrementCounter;