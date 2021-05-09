import React from "react";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/Delete";
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
