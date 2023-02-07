import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import style from "./Detail.module.css";

function Detail() {
  const [char, setChar] = useState({});
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setChar(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })    
  },[]);

  return (
    <div>
      <h1>Name: {char.name}</h1>
      <h3>Status: {char.status}</h3>
      <h3>Species: {char.species}</h3>
      <h3>Gender: {char.gender}</h3>
      <h3>Origin: {char.origin?.name}</h3>
      <img src={char.image} className={style.pic} alt=""></img>
    </div>
  );
}

export default Detail;
