import "../App.css";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <>
      <main className="container-row hero bg-attr">
        <div className="container-column">
          <h1>{props.title}</h1>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/reservation" className="btn btn-secondary">
            Reserve A Table
          </Link>
        </div>
        <div className="divider">
          <div className="spacer" />
        </div>
      </main>
    </>
  );
}
export default Main;
