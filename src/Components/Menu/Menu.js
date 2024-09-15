import "../Menu/Menu.css";
import greekSalad from "../../images/greekSalad.jpg";
import bruchetta from "../../images/bruchetta.jpg";
import dessert from "../../images/dessert.jpg";
import burgerFries from "../../images/burger-fries.jpg";
import pizza from "../../images/pizza.jpg";
import shake from "../../images/shake.jpg";
import steak from "../../images/steak.jpg";
import chicken from "../../images/chicken.jpg";
import wines from "../../images/wines.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swal from "sweetalert2";

function Menu(props) {
  function orderNow() {
    Swal.fire({
      title: "PLACE AN ORDER?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "var(--secondary)",
      confirmButtonText: "Add Order",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ORDER CONFIRMED!",
          text: "Order has been placed to checkout",
          icon: "success",
        });
      }
    });
  }
  const desc = {
    descText:
      "Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together.",
  };

  return (
    <>
      <section className="container-row">
        <div className="container-column">
          <h1>{props.title}</h1>
        </div>
      </section>
      <section className="container-row menu-list">
        <h2>Breakfast</h2>
        <div className="container-column">
          <figure>
            <img src={greekSalad} alt="Greek Salad" />
            <figcaption>
              <div className="menu-price">
                <h4>Greek Salad</h4>
                <p className="price">$12.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={bruchetta} alt="Bruchetta" />
            <figcaption>
              <div className="menu-price">
                <h4>Bruchetta</h4>
                <p className="price">$6.99</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={dessert} alt="Dessert" />
            <figcaption>
              <div className="menu-price">
                <h4>Lemon Dessert</h4>
                <p className="price">$5.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container-row menu-list">
        <h2>Lunch</h2>
        <div className="container-column">
          <figure>
            <img src={burgerFries} alt="Burger and Fries" />
            <figcaption>
              <div className="menu-price">
                <h4>Burger and Fries</h4>
                <p className="price">$15.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={pizza} alt="Pizza" />
            <figcaption>
              <div className="menu-price">
                <h4>Pizza</h4>
                <p className="price">$16.99</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={shake} alt="Fruit Shake" />
            <figcaption>
              <div className="menu-price">
                <h4>Fruit Shake</h4>
                <p className="price">$3.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container-row menu-list">
        <h2>Dinner</h2>
        <div className="container-column">
          <figure>
            <img src={steak} alt="Steak" />
            <figcaption>
              <div className="menu-price">
                <h4>Steak</h4>
                <p className="price">$18.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={chicken} alt="Chicken" />
            <figcaption>
              <div className="menu-price">
                <h4>Chicken</h4>
                <p className="price">$15.99</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={wines} alt="Wines" />
            <figcaption>
              <div className="menu-price">
                <h4>Wines</h4>
                <p className="price">$5.00</p>
              </div>
              <div className="menu-details">
                <p>{desc.descText}</p>
                <p className="order-now" onClick={orderNow}>
                  <FaLongArrowAltRight /> Order Now
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
export default Menu;
