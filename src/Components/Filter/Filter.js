import { connect } from "react-redux";
import { changeFilter } from '../../redux/actions';
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Filter({ filter, changeFilter }) {
  console.log(filter)
  function changeHandler(evt) {
    changeFilter(evt.target.value)
  }

  const inputId = shortid.generate();
  return (
    <label className={styles.filterLabel} htmlFor={inputId}>
      Search
      <input
        id={inputId}
        type="text"
        name="filter"
        value={filter}
        onChange={changeHandler}
      />
    </label>
  );
}

const mapStateToProps = (state) => {
  return state.phonebook
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(changeFilter(value))
});

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
