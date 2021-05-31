import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotesPagination = (props) => {
  const classes = useStyles();

  const pageNum = [];
  for (
    let i = 1;
    i <= Math.ceil(props.items.length / props.itemsPerPage);
    i++
  ) {
    pageNum.push(i);
  }

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNum.length}
        onChange={props.handlePageClick}
        color="primary"
        hideNextButton="true"
        hidePrevButton="true"
      />
    </div>
  );
};

export default NotesPagination;
