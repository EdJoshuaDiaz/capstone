import "../About/About.css";
import chefs from "../../images/chefs.jpg";

function About(props) {
  return (
    <>
      <section className="title-row">
        <h1>{props.title}</h1>
      </section>
      <section id="about" className="container-row">
        <div className="container-column">
          <div>
            <h2>About Us</h2>
            <p>
              Welcome to our restaurant’s “About Us” page! Here, we share the
              story of how our culinary adventure began and what makes us
              unique.
            </p>
            <br />
            <p>
              Meet the passionate team behind the scenes, discover our
              commitment to quality ingredients, and feel the warmth of our
              inviting ambiance. Join us on this journey as we invite you to be
              a part of our delicious story.
            </p>
          </div>
          <figure>
            <img src={chefs} alt="Chefs" />
          </figure>
        </div>
      </section>
    </>
  );
}
export default About;
