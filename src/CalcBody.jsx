import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function CalcBody() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [solutionNumber, setSolutionNumber] = useState(0);
  const inputRef = useRef();
  const enterRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCurrentNumber(value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setCurrentNumber((prevNumber) => (prevNumber += name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setSolutionNumber(eval(currentNumber));
    } catch (err) {
      console.log(err);
      setSolutionNumber("that's not math that I can do");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      setSolutionNumber(eval(currentNumber));
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //set enter button to be equals button

  console.log(solutionNumber);

  return (
    <div className="container" id="calc-body">
      <form className="form-group">
        {/* input display */}
        <div id="">
          <input
            className="form-control"
            value={currentNumber}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div id="display">
          <p id="display-text">{solutionNumber}</p>
        </div>

        {/* calculator numbers and operators */}
        <div className="row">
          <div className="col">
            <button
              className="btn number"
              onClick={handleButtonClick}
              onKeyDown={handleKeyPress}
              id="seven"
              name="7"
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="eight"
              onClick={handleButtonClick}
              name="8"
            >
              8
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="nine"
              onClick={handleButtonClick}
              name="9"
            >
              9
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="divide"
              name="/"
              onClick={handleButtonClick}
            >
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn number"
              id="four"
              onClick={handleButtonClick}
              name="4"
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="five"
              onClick={handleButtonClick}
              name="5"
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="six"
              onClick={handleButtonClick}
              name="6"
            >
              6
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="multiply"
              name="*"
              onClick={handleButtonClick}
            >
              *
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn number"
              id="one"
              onClick={handleButtonClick}
              name="1"
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="two"
              onClick={handleButtonClick}
              name="2"
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="three"
              onClick={handleButtonClick}
              name="3"
            >
              3
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="subtract"
              onClick={handleButtonClick}
              name="-"
            >
              -
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn number"
              id="zero"
              onClick={handleButtonClick}
              name="0"
            >
              0
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="decimal"
              onClick={handleButtonClick}
              name="."
            >
              .
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="equals"
              onClick={handleSubmit}
              onKeyDown={handleKeyPress}
              ref={enterRef}
              name="="
            >
              =
            </button>
          </div>
          <div className="col">
            <button
              className="btn number"
              id="add"
              onClick={handleButtonClick}
              name="+"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => setCurrentNumber(0)}
          className="btn btn-info col"
          id="clear"
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default CalcBody;
