import { connect } from "react-redux";
import { deleteContact } from '../../../redux/actions';
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function ListItem({ contacts, deleteContact, filter }) {
    const filtredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filtredContacts.map((item) => (
    <li className={styles.listItem} key={item.id}>
      <p className={styles.itemText}>
        {item.name}: {item.number}
      </p>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => deleteContact(item.id)}
      >
        Delete
      </button>
    </li>
  ));
};

const mapStateToProps = (state) => {
  return state.phonebook
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id))
});

ListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
