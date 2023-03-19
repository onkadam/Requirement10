import "./styles.css";
import React, { useState } from "react";

//Requirement 10
function App() {
  const [num, setNum] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (num === "") {
      alert("Please enter a two-digit number.");
      return;
    }

    if (isNaN(num) || num < 10 || num > 99) {
      alert("Please enter a valid two-digit number.");
      return;
    }

    const numInt = parseInt(num);

    let numbersArr = [];

    if (numInt % 2 === 0) {
      for (let i = numInt - 2; i > numInt - 10; i -= 2) {
        numbersArr.push(i);
      }
    } else {
      for (let i = numInt - 2; i > numInt - 10; i -= 2) {
        numbersArr.push(i);
      }
    }

    setNumbers(numbersArr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a two-digit number:
          <input type="number" value={num} onChange={handleChange} />
        </label>
      </form>
      <div>
        {numbers.length > 0 ? (
          <p>
            {num % 2 === 0 ? "Even numbers below" : "Odd numbers below"} {num}{" "}
            are:{num}, {numbers.join(", ")}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
