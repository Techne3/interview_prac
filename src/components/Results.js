import React from "react";
import PopUp from "./PopUp";

function Results({ info, openPopUp, selected, setSelected }, props) {
  console.log(info);
  console.log(selected, "here is the selected");

  const popUpWindow = (e) => {
    e.preventDefault();
    props.history.push(`http://localhost:3000/popup`);
  };

  return (
    <div>
      {info &&
        info.map((x) => (
          <>
            <h1>{x.Title}</h1>
            <img src={x.Poster} alt="posters" />
            <button
              onClick={() => {
                popUpWindow();
                openPopUp(x.imdbID);
              }}
            >
              View
            </button>
          </>
        ))}
      {/* {typeof selected.Title !== "undefined" ? (
        <PopUp selected={selected} />
      ) : (
        false
      )} */}
    </div>
  );
}

export default Results;
