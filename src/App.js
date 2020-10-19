import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { throttle } from "lodash";
import axios from "axios";

const useStyles = makeStyles({
  app: {
    display: "flex",
    padding: "20px",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
    console.log(pages);
  }, [text]);

  const onChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const getPages = async () => {
    if (!text) {
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3001/search/${text}`);
      setPages(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getItems = () => {
    return pages.map((page) => {
      return (
        <ListItem button>
          <ListItemText primary={page.name} />
        </ListItem>
      );
    });
  };

  return (
    <div className={classes.app}>
      <TextField
        label="Search Page"
        variant="outlined"
        value={text}
        onChange={onChange}
      />
      <List component="nav">{getItems()}</List>
    </div>
  );
};

export default App;
