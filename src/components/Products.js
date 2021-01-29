import React, { useState, useEffect } from "react";
import data from "../util/data";
import axios from "axios";
import Results from "./Results";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PopUp from "./PopUp";

function Products() {
  const [searched, setSearched] = useState("");
  const [info, setInfo] = useState("");
  const [selected, setSelected] = useState("");

  const apiurl = "http://www.omdbapi.com/?apikey=cb0eb1c7";

  const search = (e) => {
    // if (e.key === "Enter") {
    axios(apiurl + "&s=" + searched + "&type=movie")
      .then(({ data }) => {
        setInfo(data.Search);
      })
      .catch((err) => console.log(err));
    // }
  };

  // useEffect(() => {
  //   search();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched("");
    // search();
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result, "this is the popup");

      setSelected(result);
    });
  };

  console.log(selected, "SELECTED");
  return (
    <Router>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a movie..."
            className="searchbox"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            // onKeyPress={search}
          />
          <button onClick={search}>Search</button>
        </form>
        <Route exact path="/" component={Results}></Route>
        <Results
          info={info}
          openPopUp={openPopup}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Route path="/popup" component={PopUp}></Route>
    </Router>
  );
}

export default Products;
