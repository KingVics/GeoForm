import React from "react";
import styles from "./styles.module.css";

const Form = ({ data, handleInput, formdata }) => {
  const locations =
    data && data[0] ? data[0]?.properties?.formatted : "No address";

  const handleForm = (e) => {
    e.preventDefault();
    const { name, job, location, } =
      formdata;

    const message = `Name: ${name}\nJob:${job}\nLocation:${location}\nYour Location:${locations}\n\nSubmission Successful`;

    if (locations !== "No address") {

      if (name && job && location) {
        alert(message);
      } else {
        alert("Name, Job and Location are required.");
      }
    } else {
      alert("Please enable location to submit form");
    }
  };
  return (
    <section className={styles.Form}>
      <div className={styles.Container}>
        <form onSubmit={handleForm}>
          <div>
            <input
              type={"text"}
              placeholder="Name"
              className={styles.Input}
              name="name"
              onChange={handleInput}
            />
          </div>
          {/* <div>
            <input
              type={"text"}
              placeholder="Last Name"
              className={styles.Input}
              name="lastname"
              onChange={handleInput}
            />
          </div> */}
          <div>
            <input
              type={"text"}
              placeholder="Job"
              className={styles.Input}
              name="job"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Location"
              className={styles.Input}
              name="location"
              onChange={handleInput}
            />
          </div>
          {/* <div>
            <input
              type={"text"}
              placeholder="Company Name"
              className={styles.Input}
              name="companyname"
              onChange={handleInput}
            />
          </div> */}
          <button className={styles.Btn}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
