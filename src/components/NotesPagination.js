import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent:"center",
      display:'flex'
    },
  },
}));

const NotesPagination = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(props.items.length / props.itemsPerPage)}
        onChange={props.handlePageClick}
        color="primary"
        hideNextButton="true"
        hidePrevButton="true"
      />
    </div>
  );
};

export default NotesPagination;