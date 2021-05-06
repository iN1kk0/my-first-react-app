import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props) => (
  <div>
    {props.items.map((item, index) => (
      <div className="cardMain" key={index}>
        <Card>
          <CardContent>
            <Typography className="cardBody" component="p">
              {item}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="deleteButton"
              onClick={() => props.handleDelete(index)}
              size="small"
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    ))}
  </div>
);

export default Notes;