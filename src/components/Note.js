import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardBody: {
    textAlign: "left",
  },
  deleteButton: {
    margin: "0 auto",
  },
}));

const Note = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.cardBody} component="p">
          {props.item}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.deleteButton}
          onClick={() => props.handleDelete(props.index)}
          size="small"
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
