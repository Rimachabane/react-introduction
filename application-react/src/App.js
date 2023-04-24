import React from "react";
import quotes from "./quotes.json";
import QuoteList from "./QuoteList";

function App() {
  return (
    <div>
      <h1>Citations aléatoires</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
