import List from "../components/Movies/List";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/profileSmall.png";
const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/browse")}>
        <img
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "3.75rem",
            width: "3.75rem",
            cursor: "pointer",
          }}
          alt=""
        />
      </div>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
        }}
      >
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
            cursor: "pointer",
          }}
        >
          Super app
        </p>

        <p style={{ color: "white", fontSize: "2rem", margin: "3vw" }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List key={movie} genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
