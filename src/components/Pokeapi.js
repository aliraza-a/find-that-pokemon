import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokeapi = () => {
  const [name, setName] = useState("");
  const [find, setFind] = useState("pikachu");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${find}`);
      setImage(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types[0].type.name);
    };
    getData();
  }, [find]);

  const typeName = (e) => {
    setName(e.target.value);
  };

  const search = () => {
    if (name !== "") {
      setFind(name);
    }
    setName("");
  };

  return (
    <div className="back">
      <div className="card">
        <img src={`${image}`} alt="" className="image" />
        <h2 className="name">{find.toUpperCase()}</h2>
        <p className="type">
          Type: <span className="type-name">{type}</span>
        </p>
        <input
          type="text"
          className="search"
          placeholder="Search Pokemon"
          onChange={typeName}
        />
        <button className="btn" onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Pokeapi;
