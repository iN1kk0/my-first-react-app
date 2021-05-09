import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Notes from "./Notes";

const Form = (props) => {
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className="mainForm"
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
          className="submitButton"
          type="submit"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
      <Notes handleDelete={props.handleDelete} items={props.items} />
    </>
  );
};

export default Form;
