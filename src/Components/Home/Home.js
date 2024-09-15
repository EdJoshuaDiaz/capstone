import "../Home/Home.css";
import Main from "../Main";
import stark from "../../images/stark.jpg";
import thor from "../../images/thor.jpg";
import steve from "../../images/steve.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Main title="Little Lemon" />
      <section id="cr1" className="container-row">
        <div className="container-column">
          <h2>Our Food Services</h2>
        </div>
      </section>
      <section id="cr2" className="container-row">
        <div className="container-column">
          <Link to="/menus">
            <div className="col-bg breakfast">
              <h4>Breakfast</h4>
            </div>
          </Link>
          <Link to="/menus">
            <div className="col-bg lunch">
              <h4>Lunch</h4>
            </div>
          </Link>
          <Link to="/menus">
            <div className="col-bg dinner">
              <h4>Dinner</h4>
            </div>
          </Link>
        </div>
      </section>
      <section id="cr3" className="container-row bg-attr">
        <div className="divider top">
          <div className="spacer" />
        </div>
        <div className="row-space">
          <div className="container-column">
            <div>
              <h2>Our Mission and Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="spacer" />
        </div>
      </section>

      <section id="cr4" className="container-row">
        <div className="container-column">
          <h2>What Customers Are Saying About Us</h2>
        </div>
        <div className="container-column">
          <div className="reviews">
            <div className="reviewer">
              <figure>
                <img src={stark} alt="Tony Stark" />
              </figure>
              <figcaption>
                <h5>Tony Stark</h5>
                <p className="star">★★★★★</p>
              </figcaption>
            </div>
            <p>
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert.
            </p>
          </div>
          <div className="reviews">
            <div className="reviewer">
              <figure>
                <img src={thor} alt="Thor Ragnarok" />
              </figure>
              <figcaption>
                <h5>Thor Ragnarok</h5>
                <p className="star">★★★★★</p>
              </figcaption>
            </div>
            <p>
              Do yourself a favor and visit this lovely restaurant in (CN). The
              service is unmatched. The staff truly cares about your experience.
              The food is absolutely amazing.
            </p>
          </div>
          <div className="reviews">
            <div className="reviewer">
              <figure>
                <img src={steve} alt="Steve Rogers" />
              </figure>
              <figcaption>
                <h5>Steve Rogers</h5>
                <p className="star">★★★★★</p>
              </figcaption>
            </div>
            <p>
              It’s a great experience. The ambiance is very welcoming and
              charming. Amazing wines, food and service. Staff are extremely
              knowledgeable and make great recommendations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
