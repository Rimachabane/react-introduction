import React from "react";
import Quote from "./Quote";
import "./styles.css";

function QuoteList(props) {
  const quotes = [];
  while (quotes.length < 3) {
    const randomQuote = props.quotes[Math.floor(Math.random() * props.quotes.length)];
    if (!quotes.includes(randomQuote)) {
      quotes.push(randomQuote);
    }
  }

  return (
    <div>
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </div>
  );
}

export default QuoteList;
