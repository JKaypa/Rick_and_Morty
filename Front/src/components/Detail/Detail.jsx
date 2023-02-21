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
  },[id]);
  
  return (
    <div className={style.container}>
      <img src={char.image} className={style.pic} alt=""></img>
      <h3 className={style.data}>Id: {char.id}</h3>
      <h1 className={style.data}>Name: {char.name}</h1>
      <h3 className={style.data}>Species: {char.species}</h3>
      <h3 className={style.data}>Gender: {char.gender}</h3>
      <h3 className={style.data}>Status: {char.status}</h3>
      <h3 className={style.data}>Location: {char.location}</h3>
      <h3 className={style.data}>Origin: {char.origin}</h3>
    </div>
  );
}

export default Detail;
