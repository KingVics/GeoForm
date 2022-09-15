import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <nav className={styles.Nav}>
      <div>image</div>
      <ul>
        <li>Home</li>
        <li>Jobs</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
