import "./App.css";
import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Notes from "./components/Notes";
import NotesPagination from "./components/NotesPagination";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    "Hello, World",
    "Learn JS",
    "Learn React",
    "Test Pagination",
  ]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      setItems([...items, value]);
    }
    setValue('');
  };

  const handleDelete = (index) => {
    const newItems = items.filter((items, i) => i !== index);
    setItems(newItems);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredNotes(
      items.filter((items) =>
        items.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  const handlePageClick = (event, page) => {
    setCurrentPage(Number(page));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotes.slice(indexOfFirstItem, indexOfLastItem);

  const useStyles = makeStyles(() => ({
    mainContent: {
      flex: "1 0 auto",
      padding: "0",
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <Container className={classes.mainContent} maxWidth="false">
        <Header handleSearch={handleSearch} />
        <Container maxWidth="md">
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={value}
          />
          <Notes handleDelete={handleDelete} items={currentItems} />
          <NotesPagination
            items={filteredNotes}
            handlePageClick={handlePageClick}
            itemsPerPage={itemsPerPage}
          />
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
