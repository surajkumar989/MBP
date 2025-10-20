import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Business Plans <br />
            <span>for investor</span>
          </h1>
          <p>
            Tailored Professional business plans for SBA loans,startups and
            growth-stage companies
          </p>
          <div className="herobutton">
            <div className="herobutton1">
              <button>Start Your Plan</button>
            </div>
            <div className="herobutton2">
              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div className="heroimage">
          <img src="./image2.png"></img>
        </div>
      </section>
    </div>
  );
}

export default Hero;
