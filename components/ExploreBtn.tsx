"use client";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mx-auto mt-7"
      onClick={() => {
        console.log("Button clicked");
      }}
    >
      <a href="#events">Explore Events</a>
    </button>
  );
};

export default ExploreBtn;
