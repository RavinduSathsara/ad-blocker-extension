import React from "react";
import "./App.css";

function App() {
  const blockAds = () => {
    // Logic to hide ad elements (for example, elements with class 'ad')
    const adElements = document.querySelectorAll(".ad");
    adElements.forEach((element) => {
      element.style.display = "none";
    });
  };

  return (
    <div className="App">
      <h1>Ad Blocker Extension</h1>
      <button onClick={blockAds}>Block Ads</button>
    </div>
  );
}

export default App;
