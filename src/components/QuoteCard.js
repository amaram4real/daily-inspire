import React from "react";

function QuoteCard({ quote }) {
  if (!quote) return null;
  return (
    <div className="quote-card">
      <h2 className="quote-text">"{quote.text}"</h2>
      <p className="quote-author">- {quote.author || "Unknown"}</p>
    </div>
  );
}

export default QuoteCard;
