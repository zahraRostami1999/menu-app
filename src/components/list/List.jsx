import styles from "./List.module.css";
import PropTypes from "prop-types";

function List(props) {
  const Listitems = props.items;
  const category = props.category;

  const foodsList = Listitems.map((item) => (
    <li key={item.id}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemPrice}>{item.price}</div>
    </li>
  ));

  return (
    <>
      <div className={styles.listWrapper}>
        <div className={styles.listTitle}>
          <h3>{category}</h3>
        </div>
        <div className={styles.listItems}>
          <ul>{foodsList}</ul>
        </div>
      </div>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  Listitems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};

List.defaultProp = {
  Listitems: [],
  category: "CategoryName",
};

export default List;
