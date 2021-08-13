import { connect } from "react-redux";
import { changeFilter } from '../../redux/filter/filter-actions';
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Filter({ filterValue, changeFilter }) {
  
  const inputId = shortid.generate();
  return (
    <label className={styles.filterLabel} htmlFor={inputId}>
      Search
      <input
        id={inputId}
        type="text"
        name="filter"
        value={filterValue}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </label>
  );
}

const mapStateToProps = (state) => ({
  filterValue: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(changeFilter(value))
});

Filter.defaultProps = {
  filterValue: "",
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
