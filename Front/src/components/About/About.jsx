import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Rick and Morty App</h1>
      <div className={style.text}>
        <p>
          In this App we can search for and save the characters we want in
          favorites, we can also sort them in ascending or descending order and
          filter them by gender.
        </p>
        <br />
        <p>
          We can add one more character randomly or by its id which is a number
          from 1 to 864, keep in mind that the first 100 are already obtained.
        </p>
        <br />
        <p>
          This App was created with:
          <ul>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>Node.js - Express</li>
            <li>React.js</li>
            <li>Pure CSS</li>
          </ul>
        </p>
        <br />
        <p>
          Created by: Jose Kaypa, Software Engineer student and FullStack
          developer.
        </p>
        <p>email: jose_kaypa@hotmail.com</p>
        <p>
          linkedIn:{" "}
          <a href="https://www.linkedin.com/in/jose-kaypa">
            linkedin.com/in/jose-kaypa
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
