import React from 'react'

function Services() {
  return (
    <div>
      <div className="servicehead">
        <h1>Services</h1>
      </div>
      <div className="service-cards">
        <div className="cards">
          <div className="cardimage">
            <img src="../rafiki.png" alt="Pre Planning" />
          </div>
          <div className="service-content">
            <h2>Pre-Planning</h2>
            <p>
              Thorough pre-planning helps avoid resource-draining hurdles,
              unplanned delays, and cost overruns.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="cards">
          <div className="cardimage">
            <img src="../rafiki copy 3.png" alt="Planning" />
          </div>
          <div className="service-content">
            <h2>Planning</h2>
            <p>
              Most entrepreneurs start with planning because it’s easy, but this
              approach is flawed and must shift for real success.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="cards">
          <div className="cardimage">
            <img src="../postp.png" alt="Post-Planning" />
          </div>
          <div className="service-content">
            <h2>Post-Planning</h2>
            <p>
              Post-planning helps you assess local economic trends and build
              networks to shape strong business strategies.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="cards">
          <div className="cardimage">
            <img src="../rafiki copy.png" alt="Investor Pitch" />
          </div>
          <div className="service-content">
            <h2>Investor Pitch</h2>
            <p>
              With top analysts, expert consultants, and a vast report
              repository, we provide consulting services worldwide.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
