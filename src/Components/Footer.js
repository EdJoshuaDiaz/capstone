import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

function Footer(props) {
  const socialMedia = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com",
    },
    {
      icon: faYoutube,
      url: "https://www.youtube.com",
    },
    {
      icon: faYelp,
      url: "https://www.yelp.com",
    },
  ];

  return (
    <footer>
      <section id="fc1" className="container-row">
        <div className="container-column">
          <nav id="footer-nav">
            <menu>
              {props.menuNav.map((list) => {
                return (
                  <li>
                    <NavLink to={list.pageURL}>{list.pageName}</NavLink>
                  </li>
                );
              })}
            </menu>
          </nav>
          <div id="soc-med">
            {socialMedia.map((list) => {
              return (
                <Link to={list.url}>
                  <FontAwesomeIcon icon={list.icon} className="fa-xl" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section id="fc2" className="container-row">
        <div className="container-column">
          <div className="four-col">
            <div>
              <Link className="logo" to="/">
                <img src={Logo} alt="Little Lemon" width={300} />
              </Link>
            </div>
            <div>
              <h5>Contact Us Today</h5>
              <p>
                <Link to="tel:888-888-8888">888-888-8888</Link>
              </p>
              <p>
                <Link to="mailto:email@sample.com">email@sample.com</Link>
              </p>
            </div>
            <div>
              <h5>Our Location</h5>
              <p>
                123 Street, 12 Road, 34 Bldg <br /> San Marino, CA 1234, USA
              </p>
            </div>
            <div>
              <h5>Business Hours</h5>
              <time>
                Monday - Sunday: <br />
                Open 24 hours
              </time>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <small>All rights reserved to Little Lemon 2024</small>
      </div>
    </footer>
  );
}
export default Footer;
