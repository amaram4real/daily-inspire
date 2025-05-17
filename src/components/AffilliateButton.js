import React from "react";

function AffiliateButton() {
  // Replace with your Amazon affiliate link!
  const affiliateUrl =
    "https://www.amazon.com/s?k=inspirational+merch&tag=YOUR_AFFILIATE_ID";

  return (
    <div className="affiliate-section">
      <a
        className="affiliate-btn"
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Inspirational Merch
      </a>
    </div>
  );
}

export default AffiliateButton;
