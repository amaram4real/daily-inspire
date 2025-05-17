import React from "react";

function ShareButtons({ quote }) {
  const shareText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
  const url = encodeURIComponent(window.location.href);

  return (
    <div className="share-buttons">
      <a
        className="share-btn twitter"
        href={`https://twitter.com/intent/tweet?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <a
        className="share-btn facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </a>
      <button
        className="share-btn copy"
        onClick={() => {
          navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
          alert("Copied to clipboard!");
        }}
      >
        Copy Quote
      </button>
    </div>
  );
}

export default ShareButtons;
