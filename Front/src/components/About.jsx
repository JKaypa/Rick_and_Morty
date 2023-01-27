import React from 'react';
import style from './About.module.css'

function About() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Rick and Morty App
            </h1>
            <p>
                This app is created with React and React Router.
                You can add new characters from the show to your creen
                by entering an id number you want up to 864, also you can
                close the cards for cleaning the your screen.</p>

                <p>This app was created with React and React Router.</p>

                <p>Created by: Jose Kaypa, FullStack developer</p>
                <p>email: jose_kaypa@hotmail.com</p>
                <p>linkedIn:</p><a href="https://www.linkedin.com/in/jose-kaypa/">https://www.linkedin.com/in/jose-kaypa/</a>
            
        </div>
      );
}

export default About;