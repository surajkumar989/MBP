import React from "react";

function footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-01">
          <div className="footer-02">
            <div>
              <img src="../image 65 (1).png" />
            </div>
            <div>
              <img src="../ri_facebook-fill.png" alt="facebook" />
              <img src="../mdi_twitter.png" alt="twitter" />
              <img src="../mdi_youtube.png" alt="youtube" />
              <img src="../ri_linkedin-fill.png" alt="linkdin" />
              <img src="../iconoir_instagram.png" alt="instgram" />
            </div>
          </div>
          <div className="footer-02-header">
            <h2>Want to recive amazing updates on</h2>
            <h2>ideas and business plan?</h2>
            <div>
              <input type="email" placeholder="Email Id" required></input>
            </div>
            <div className="footer-05">
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-03">
          <div>
            <h2>Quick Links</h2>
            <p>Home</p>
            <p>Services</p>
            <p>Pricing</p>
            <p>Industries</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>
          <div>
            <h2>Company</h2>
            <p>Abougt Us</p>
            <p>Careers</p>
            <p>Help Center</p>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h2>Our Services</h2>
            <p>Market Research Reports</p>
            <p>Business Feasibility Studies</p>
            <p>Business Modelling</p>
            <p>Detailed Project Reports</p>
            <p>Investment Pitch Decks</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="footer-04">
          <div> &copy; 2025 Meticulous BPlans. All rights reserved.</div>
          <div>
            <div className="footer-06">
               <img src="../icon _PayPal_.png" alt="Paypal" />
              <img src="../icon _MasterCard_.png" alt="Mastercard" />
              <img src="../icon _Visa_.png" alt="Visa" />
              <img src="../icon _apple pay_.png" alt="Applepay" />
              <img src="../icon _amex_.png" alt="American Express" />
              <img src="../icon _discover_.png" alt="Discover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
