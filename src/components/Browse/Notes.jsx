import { useState } from "react";
import Edit from "../../assets/edit.png";
import pen from "../../assets/pen.png";
import "./Notes.css";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text")) || ""
  );
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div className="notes-container">
      <p className="notes-title">All notes</p>
      <textarea
        className="notes-textarea"
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <img src={Edit} className="notes-edit-icon" alt="" />
      <img src={pen} className="notes-pen-icon" alt="" />
    </div>
  );
};

export default Notes;
