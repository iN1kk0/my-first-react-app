import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SearchField from "./SearchField";

const useStyles = makeStyles((theme) => ({
  headerContainter: {
    padding: 0,
  },
  title: {
    flexGrow: 0,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  between: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.headerContainter} maxWidth="false">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My First React App | Notes
          </Typography>
          <div className={classes.between} />
          <SearchField />
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;
