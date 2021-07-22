import React from "react";
import Note from "./Note";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardMain: {
    maxWidth: "275px",
    display: "inline-block",
    margin: "12px",
    overflowWrap: "break-word",
  },
}));

const Notes = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.items.map((item, index) => (
        <div className={classes.cardMain} key={index}>
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
};

export default Notes;
