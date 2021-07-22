import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  submitButton: {
    margin: "12px",
  },
  mainForm: {
    margin: "12px",
  },
}));

const Form = (props) => {
  const classes = useStyles();

  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className={classes.mainForm}
        noValidate
        autoComplete="off"
      >
        <Input
          value={props.value}
          onChange={props.handleChange}
          placeholder="Add Note"
          inputProps={{ "aria-label": "description" }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          type="submit"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;
