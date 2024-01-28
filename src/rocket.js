import React from "react";

const Rocket = () => {
  return (
    <div className="container">
      <div className="sky"></div>

      <div className="space-shuttle-container">
        <div className="rocket">
          <div className="tank-connector"></div>
          <div className="tank">
            <div className="tank-ring-frame"></div>
          </div>

          <div className="left-rocket"></div>
          <div className="left-rocket-engine"></div>
          <div className="right-rocket"></div>
          <div className="right-rocket-engine"></div>
        </div>

        <div className="orbiter">
          <div className="wing-bottom"></div>
          <div className="wing"></div>
          <div className="fuselage"></div>
          <div className="fuselage-window"></div>
          <div className="cabin"></div>
          <div className="cargo-bay">
            <div className="iran-flag">
              <div className="red"></div>
              <div className="white"></div>
              <div className="green"></div>
            </div>
          </div>
          <div className="elevon"></div>
          <div className="elevon-left"></div>
          <div className="elevon-right"></div>
          <div className="aft-fuselage-block"></div>
          <div className="main-engine-left-connector"></div>
          <div className="main-engine-left"></div>
          <div className="main-engine-right-connector"></div>
          <div className="main-engine-right"></div>
          <div className="main-engine-top-connector"></div>
          <div className="main-engine-top"></div>
          <div className="maneuvering-engine-right"></div>
          <div className="maneuvering-engine-left"></div>
          <div className="vertical-stabilizer"></div>
          <div className="aft-fuselage"></div>
        </div>

        <div className="solid-rocket-booster-exhaust"></div>
        <div className="main-engine-exhaust"></div>
      </div>

      <div className="water-clouds"></div>
    </div>
  );
};

export default Rocket;
