import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log("data", res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((character) => {
        return <Character key={character.url} character={character} />;
      })}
    </div>
  );
};

export default App;
