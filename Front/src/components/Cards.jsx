import React from "react";
import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards({ onClose, characters }) {
  return (
    <div className={style.container}>
      {characters?.map((char) => {
        return (
          <Card
            key={char.id}
            onClose={onClose}
            img={char.image}
            name={char.name}
            id={char.id}
            gender={char.gender}
            specie={char.species}
          />
        );
      })}
    </div>
  );
}
