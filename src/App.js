import "./App.css";
import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Notes from "./components/Notes";
import NotesPagination from "./components/NotesPagination";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Hello, World",
        "Learn JS",
        "Learn React",
        "Test Pagination",
      ],
      currentPage: 1,
      itemsPerPage: 6,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.setState({
        items: [...this.state.items, this.state.value],
      });
    }
  }

  handleDelete(index) {
    const { items } = this.state;

    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      }),
    });
  }

  handleSearch(e) {
    let text = e.target.value.trim();
    this.filterNotes(text);
  }

  filterNotes(text) {
    let filteredNotes = this.state.items.filter(function (item) {
      return item.toLowerCase().search(text.toLowerCase()) !== -1;
    });
    this.setState({ items: filteredNotes });
  }

  handlePageClick(event, page) {
    this.setState({
      currentPage: Number(page),
    });
  }

  render() {
    const { items, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="App">
        <Container className="mainContent" maxWidth="false">
          <Header handleSearch={this.handleSearch} />
          <Container maxWidth="md">
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              value={this.state.value}
            />
            <Notes handleDelete={this.handleDelete} items={currentItems} />
            <NotesPagination
              items={this.state.items}
              handlePageClick={this.handlePageClick}
              itemsPerPage={this.state.itemsPerPage}
            />
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
