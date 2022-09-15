import React from "react";
import styles from "./styles.module.css";

const Form = ({ data, handleInput, formdata }) => {
  const location =
    data && data[0] ? data[0]?.properties?.formatted : "No address";

  const handleForm = (e) => {
    e.preventDefault();
    const { firstname, lastname, jobposition, jobtitle, companyname } =
      formdata;

    const message = `FirstName: ${firstname}\nLastName: ${lastname}\nCompany:${companyname}\nPosition:${jobposition}\nTitle:${jobtitle}\nYour Location:${location}\n\nSubmission Successful`;

      if (firstname && lastname && jobtitle) {
            if (location !== "No address") {
              alert(message);
            } else {
              alert("Please enable location to submit form");
            }
      } else {
          alert('First Name, Last Name and Job Title are required.')
      }
  
  };
  return (
    <section className={styles.Form}>
      <div className={styles.Container}>
        <form onSubmit={handleForm}>
          <div>
            <input
              type={"text"}
              placeholder="First Name"
              className={styles.Input}
              name="firstname"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Last Name"
              className={styles.Input}
              name="lastname"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Job Position"
              className={styles.Input}
              name="jobposition"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Job Title"
              className={styles.Input}
              name="jobtitle"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Company Name"
              className={styles.Input}
              name="companyname"
              onChange={handleInput}
            />
          </div>
          <button className={styles.Btn}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
