import React from "react";
import Note from "./Note";

const Notes = (props) => (
  <>
    {props.items.map((item, index) => (
      <div className="cardMain" key={index}>
        <Note
          key={index}
          index={index}
          item={item}
          handleDelete={props.handleDelete}
        />
      </div>
    ))}
  </>
);

export default Notes;
