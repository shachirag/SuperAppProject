import styles from "./Category.module.css";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import Chips from "../Global/Chips";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={action} alt="" />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={drama} alt="" />
    ),
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={fantasy} alt="" />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={fiction} alt="" />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={horror} alt="" />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={music} alt="" />
    ),
  },
  {
    id: "Romance",
    color: "#11B800",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={romance} alt="" />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={thriller} alt="" />
    ),
  },
  {
    id: "Western",
    color: "#912500",
    image: (
      <img style={{ width: "10rem", height: "7.5rem" }} src={western} alt="" />
    ),
  },
];
const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const handleSignUp = () => {
    const errorDiv = document.querySelector(".genre-page .error");
    if (categories.length < 3) {
      if (!errorDiv) {
        const newErrorDiv = document.createElement("div");
        newErrorDiv.innerText = "Please select at least three categories.";
        newErrorDiv.style.color = "red";
        newErrorDiv.style.marginTop = "36rem";
        newErrorDiv.style.marginRight = "4rem";
        newErrorDiv.classList.add("error");
        const genrePage = document.querySelector(".genre-page");
        if (genrePage) {
          genrePage.appendChild(newErrorDiv);
        } else {
          console.error("Could not find element with class name 'genre-page'");
        }
      }

      return;
    } else if (errorDiv) {
      errorDiv.remove();
    }
    window.localStorage.setItem("genres", JSON.stringify([...categories]));
    navigate("/browse");
  };
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh", marginLeft: "6rem" }}>
          <Chips
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
        </div>
      </div>
      <div className={styles.right}>
        {genres.map((data, idx) => (
          <Block
            key={data.id}
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <div className="genre-page"></div>
      <button className={styles.signUp} onClick={handleSignUp}>
        Next Page
      </button>
    </div>
  );
};
const Block = ({ data, idx, setCategories, categories }) => {
  const [selected, setSelected] = useState();
  const handleClick = (e) => {
    if (categories.includes(data.id)) {
      const index = categories.indexOf(data.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    setSelected(categories.includes(data.id) === true);
  }, [categories, data.id]);
  return (
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        background: data["color"],
        color: "white",
        padding: "1rem",
        borderRadius: "0.75rem",
        border: `${selected ? "0.25rem solid green" : "0.25rem solid white"}`,
      }}
    >
      <p style={{ marginBottom: "0.25rem", fontSize: "1.125rem", pointer: "pointer" }}>{data.id}</p>
      {data.image}
    </div>
  );
};
export default Category;
