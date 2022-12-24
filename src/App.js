import "./styles.css";
import Profile1 from "./images/cse.png";

export default function App() {
  return (
    <div className="App">
      <div className="command">
        <a href="#" className="avatar">
          <img src={Profile1} alt="Profile Pic" />
        </a>
        <div className="content">
          <a href="#" className="author">
            Karthi
          </a>
        </div>
        <div className="metadata">
          <span className="date">Today 6.03am</span>
        </div>
        <div className="text">
          Hi Myself karthikeyan, I Have Learning Web Developing
        </div>
      </div>
    </div>
  );
}
