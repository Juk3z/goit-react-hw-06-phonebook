import { connect } from "react-redux";
import ContactsList from "./Components/ContactsList/ContactsList";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ListItem from "./Components/ContactsList/ListItem";


function App() {
  return (
    <div className="container">
      <Form />
      <Filter />
      <ContactsList>
        <ListItem  />
      </ContactsList>
    </div>
  );
};

export default connect(null)(App);


