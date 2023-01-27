import Cards from "./components/Cards";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import style from "./App.module.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

let username = "jose_kaypa@hotmail.com";
let password = "1234567890";

function App() {
  let [characters, setCharacters] = useState([]);
  let [id, setId] = useState("");
  let [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const onChange = (event) => {
    let id = event.target.value;
    setId(id);
  };

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          let exist = characters.find((char) => char.id === data.id);
          exist
            ? alert("This character exists already")
            : setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch(() => window.alert("No hay personajes con ese ID"));
    setId("");
  }

  // useEffect(()=>{
  //   !access && navigate('/')
  // }, [access])

  const login = (userData) => {
    if (userData.email === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onClose = (id) => {
    setCharacters([...characters].filter((char) => char.id !== id));
  };

  return (
    <div className={style}>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} onChange={onChange} id={id} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
