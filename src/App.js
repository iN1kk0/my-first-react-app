import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { Container } from "@material-ui/core";

function App() {
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
}

export default App;
