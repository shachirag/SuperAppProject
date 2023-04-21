import Profile from "../../assets/profileBig.png";
import "./Info.css";
const Info = () => {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div className="info-container">
      <div className="Profile">
        <img src={Profile} className="profile-img" alt="" />
      </div>
      <div className="info-details">
        <p className="name">{info.name}</p>
        <p className="mail">{info.mail}</p>
        <p className="username">{info.username}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
  return (
    <div className="chips-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className="chip-btn"
          style={{
            background: `${color}`,
          }}
        >
          {category} <span>X</span>
        </button>
      ))}
    </div>
  );
};

export default Info;
