import { Link } from "react-router-dom";
import { photo } from "../lib/photos.js";

export default function WinterTBA() {
  return (
    <div className="tba">
      <div>
        <h2>Winter 26/27</h2>
        <div className="tba-box">
          <strong>December to March</strong>
          Indoor locations to be announced.
        </div>
        <p>We move indoors for the winter. Follow us on Instagram for the first look at locations and times, or send us a note and we'll keep you posted.</p>
        <p><a className="btn" href="https://www.instagram.com/tekkerzclub/" target="_blank" rel="noreferrer">Follow @tekkerzclub</a>{" "}<Link className="link-line" to="/contact">Ask us a question</Link></p>
      </div>
      <img src={photo("turf-19")} alt="Players on indoor turf during Winter 26" loading="lazy" />
    </div>
  );
}
