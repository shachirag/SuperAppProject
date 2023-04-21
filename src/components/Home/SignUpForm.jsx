import React, { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [formValues, setFromValues] = useState({
    name: "",
    username: "",
    mail: "",
    mobile: "",
    check: false,
    validFields: {
      name: true,
      username: true,
      mail: true,
      mobile: true,
      check: true,
    },
    touchedFields: {
      name: false,
      username: false,
      mail: false,
      mobile: false,
      check: false,
    },
  });
  console.log(formValues);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const validFields = { ...formValues.validFields };
    if (value.trim().length === 0) {
      validFields[name] = false;
    } else {
      validFields[name] = true;
    }
    const touchedFields = { ...formValues.touchedFields };
    touchedFields[name] = true;
    setFromValues({ ...formValues, [name]: value, validFields });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validFields = { ...formValues.validFields };
    const touchedFields = { ...formValues.touchedFields };
    Object.keys(validFields).forEach((field) => {
      if (
        typeof formValues[field] === "string" &&
        formValues[field].trim().length === 0
      ) {
        validFields[field] = false;
        touchedFields[field] = true;
      } else {
        validFields[field] = true;
      }
    });
    setFromValues({ ...formValues, validFields, touchedFields });
    const isCheckboxChecked = formValues.check;
    if (
      Object.values(validFields).every((field) => field) &&
      isCheckboxChecked
    ) {
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      navigate("/genre");
    } else {
      if (!isCheckboxChecked) {
        const validFields = { ...formValues.validFields };
        const touchedFields = { ...formValues.touchedFields };
        validFields.check = false;
        touchedFields.check = true;
        setFromValues({ ...formValues, validFields, touchedFields });
      }
    }
  };
  return (
    <div className={styles.body}>
      <p className={styles.super}>Super App</p>
      <p>Create a new Account</p>
      <p>
        Email <span style={{ color: "green" }}>|</span> Google
      </p>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            const touchedFields = { ...formValues.touchedFields };
            touchedFields["name"] = true;
            setFromValues({ ...formValues, touchedFields });
          }}
          type="text"
          name="name"
          placeholder="Name"
          className={!formValues.validFields.name ? styles.error : ""}
        />
        {!formValues.validFields.name && formValues.touchedFields.name && (
          <p className={styles.errorMessage}>Please enter your name</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            const touchedFields = { ...formValues.touchedFields };
            touchedFields["username"] = true;
            setFromValues({ ...formValues, touchedFields });
          }}
          type="text"
          name="username"
          placeholder="UserName"
          className={
            !formValues.validFields.username &&
            formValues.touchedFields.username
              ? styles.error
              : ""
          }
        />
        {!formValues.validFields.username &&
          formValues.touchedFields.username && (
            <p className={styles.errorMessage}>Please enter your username</p>
          )}
        <input
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            const touchedFields = { ...formValues.touchedFields };
            touchedFields["mail"] = true;
            setFromValues({ ...formValues, touchedFields });
          }}
          type="mail"
          name="mail"
          placeholder="Email"
          className={
            !formValues.validFields.mail && formValues.touchedFields.mail
              ? styles.error
              : ""
          }
        />
        {!formValues.validFields.mail && formValues.touchedFields.mail && (
          <p className={styles.errorMessage}>Please enter your email address</p>
        )}
        <input
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            const touchedFields = { ...formValues.touchedFields };
            touchedFields["mobile"] = true;
            setFromValues({ ...formValues, touchedFields });
          }}
          type="number"
          name="mobile"
          placeholder="Mobile"
          className={
            !formValues.validFields.mobile && formValues.touchedFields.mobile
              ? styles.error
              : ""
          }
        />
        {!formValues.validFields.mobile && formValues.touchedFields.mobile && (
          <p className={styles.errorMessage}>Please enter your mobile number</p>
        )}
        <label>
          <input
            onChange={(e) =>
              setFromValues({
                ...formValues,
                [e.target.name]: e.target.checked,
              })
            }
            type="checkbox"
            name="check"
          />
          Share my registration data with Superapp
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          SIGN UP
        </button>
      </form>
      <footer className={styles.footer}>
        <p>
          By clicking on Sign up. you agree to Superapp
          <span style={{ color: "green" }}> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span style={{ color: "green" }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
};

export default SignUpForm;
