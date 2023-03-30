import "./form.css";
import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skill, setSkill] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password && selectedSkills.length>0) {
      setFormValid(true);
      props.onSubscribe(true);
      setSelectedSkills([]); 
      resetForm();
    } else {
      setFormValid(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSkill("");
    setFormValid(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSkillChange = (event) => {
    const skillToAdd = event.target.value;
    if (!selectedSkills.includes(skillToAdd)) {
      setSelectedSkills([...selectedSkills, skillToAdd]);
    }
    setSkill("");
  };

  const handleSkillRemove = (selectedSkill) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill !== selectedSkill
    );
    setSelectedSkills(updatedSkills);
  };

  useEffect(() => {
    if (name && email && password && setSelectedSkills > 0) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, email, password, selectedSkills]);

  return (
    <div className="container">
      <div className="leftSide">
        <h1>
          Learn to code by<br></br>
          watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time.<br></br>
          Watching scripted tutorials is gtrat, but undersatnding how<br></br>
          developers think is invaluable.
        </p>
      </div>
      <div className="rightSide">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <br></br>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address"
          />
          <br></br>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Passwrod"
          />
          <br></br>
          <select value={skill} onChange={handleSkillChange}>
            <option disabled value="">
              Choose your skills
            </option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </select>
          <br></br>
          <div className="selectedSkills">
            {selectedSkills.map((selectedSkill) => (
              <div key={selectedSkill} className="skillBox">
                <span>{selectedSkill}</span>
                <button
                  type="button"
                  className="closeButton"
                  onClick={() => handleSkillRemove(selectedSkill)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button type="submit" className={formValid ? "active" : ""}>
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p>
          By clicking the button you are agreeing to our
          <span>Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
