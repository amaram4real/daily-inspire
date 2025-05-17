import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import ShareButtons from "./components/ShareButtons";
import AdPlaceholder from "./components/AdPlaceholder";
import AffiliateButton from "./components/AffiliateButton";
import "./styles/themes.css";
import quotes from "./data/quotes.json";

const themes = ["theme-light", "theme-dark", "theme-blue", "theme-gradient"];

function getTodayIndex() {
  // Rotates daily based on date
  const start = new Date(2020, 0, 1);
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff % quotes.length;
}

function getTheme() {
  // Rotate theme per day
  const today = new Date();
  return themes[today.getDate() % themes.length];
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(getTodayIndex());
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    setQuoteIndex(getTodayIndex());
    setTheme(getTheme());
  }, []);

  return (
    <div className={`app-container ${theme}`}>
      <div className="quote-section">
        <QuoteCard quote={quotes[quoteIndex]} />
        <ShareButtons quote={quotes[quoteIndex]} />
        <AffiliateButton />
      </div>
      <AdPlaceholder />
      <footer>
        <span>© {new Date().getFullYear()} Daily Inspire</span>
      </footer>
    </div>
  );
}

export default App;
