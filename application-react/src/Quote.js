import React from "react";
import "./styles.css";

function Quote(props) {
  return (
    <div className="quote">
      <p className="quote"> {props.quote.quote}</p>
      <p className="quote">- {props.quote.author}</p>
    </div>
  );
}

export default Quote;