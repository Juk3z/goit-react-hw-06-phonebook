// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../../redux/contacts/contacts-actions';
import { getFilteredContacts } from "../../../redux/contacts/contacts-selector";

import styles from "./styles.module.css";

function ListItem() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return contacts.map((item) => (
    <li className={styles.listItem} key={item.id}>
      <p className={styles.itemText}>
        {item.name}: {item.number}
      </p>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(item.id))}
      >
        Delete
      </button>
    </li>
  ));
};

// ListItem.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

export default ListItem;
