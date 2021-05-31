import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => (
  <Card>
    <CardContent>
      <Typography className="cardBody" component="p">
        {props.item}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        className="deleteButton"
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

export default Note;
