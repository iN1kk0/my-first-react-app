import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { Container } from "@material-ui/core";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Hello, World",
        "Learn React",
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
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
    //console.log(text);
    this.filterNotes(text);
  }

  filterNotes(text) {
    let filteredNotes = this.state.items.filter(function (item) {
      return item.toLowerCase().search(text.toLowerCase()) !== -1;
    });
    this.setState({ items: filteredNotes });
  }

  render() {
    return (
      <div className="App">
        <Container className="mainContent" maxWidth="false">
          <Header handleSearch={this.handleSearch} />
          <Container maxWidth="md">
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleDelete={this.handleDelete}
              value={this.state.value}
              items={this.state.items}
            />
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <Container className="mainContent" maxWidth="false">
        <Header />
        <Container maxWidth="md">
          <Form />
        </Container>
      </Container>
      <Footer />
    </div>
  );
}*/

export default App;
