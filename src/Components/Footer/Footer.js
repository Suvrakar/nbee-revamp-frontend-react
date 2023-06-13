import React from "react";
import "../Common.css";

const Footer = () => {
  return (
    <footer id="site-footer">
      <section className="horizontal-footer-section" id="footer-top-section">
        <div id="footer-logo">
          <picture>
            <img src="/whiteLogo.png" alt="footer logo" role="presentation" />
          </picture>
        </div>
        <div id="footer-top-menu-container" role="menubar"></div>
        <div id="footer-buttons-container">
          <a
            href="https://nutritionbee.net/"
            target="_blank"
            className="footer-button"
            role="button"
          >
            View our Blogs
          </a>
        </div>
      </section>

      <section className="horizontal-footer-section" id="footer-middle-section">
        <div id="footer-about" className="footer-columns footer-columns-large">
          <h1>Our Address</h1>
          <address>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />
              Mirpur, Dhaka
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />
              01521429803
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />
              nutritionbee00@gmail.com
            </p>
            <p>
              <img src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png" />
              10:00 AM – 10:00 PM
            </p>
          </address>
        </div>
        <div className="footer-columns">
          <h1>Need Help?</h1>
          <ul className="footer-column-menu" role="menu">
            <p>
              If you face any problem feel free to contact us over the phone.
            </p>
            {/* <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Services
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Pricing
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Portfolio
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                News
              </a>
            </li> */}
          </ul>
        </div>
        {/* <div className="footer-columns">
          <h1>Resources</h1>
          <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                FAQ
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Media
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Guides
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Free Resources
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Testimonials
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="footer-columns">
          <h1>Information</h1>
          <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                About Us
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Terms of Use
              </a>
            </li>
            <li className="footer-column-menu-item">
              <a href="#" className="footer-column-menu-item-link" role="menuitem">
                Legal Information
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Message Us
              </a>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
              <a href="#" className="footer-column-menu-item-link">
                Leave a Feedback
              </a>
            </li>
          </ul>
        </div> */}
      </section>

      <section className="horizontal-footer-section" id="footer-bottom-section">
        <div id="footer-copyright-info">
          &copy; Nutrition Bee. 2022. All rights reserved.
        </div>
        <div id="footer-social-buttons">
          <a target="_blank" href="https://www.facebook.com/nutritionbee">
            <img
              src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"
              alt="Facebook"
            />
          </a>
          {/* <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" alt="Telegram" />
      <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" alt="Pinterest" /> */}
          <a
            target="_blank"
            href="https://www.instagram.com/nutritionbee00/?igshid=YmMyMTA2M2Y=&fbclid=IwAR3qfcUD9xFgCQ5oBdZJA-dp6H02_--nVXE2Ph4NDxFD6IA8xdDdws8LM9A"
          >
            <img
              src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"
              alt="Instagram"
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
