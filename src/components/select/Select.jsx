import { useState } from "react";
import styles from "./Select.module.css";

function Select(props) {
  const category = props.category;
  const items = props.items;

  const [itemSelect, setItemSelect] = useState("");
  const [quantity, setQuantity] = useState(0); 

  const handleChange = (e) => {
    const selectValue = e.target.value;
    setItemSelect(selectValue);
  };

  const handleQuantityChange = (e) => {
    const enteredQuantity = parseInt(e.target.value, 10);
      setQuantity(enteredQuantity);
  };

  const options = items.map((item) => (
    <option className={styles.options} key={item.id} value={item.name}>
      {item.name}
    </option>
  ));

  const prices = (quantity) => {
    items.map((item) => <p>price = {item.price * quantity}</p>);
  } 

  return (
    <div className={styles.container}>
      <div className={styles.selectBox}>
        <select
          className={styles.options}
          onChange={handleChange} // Use onChange instead of onClick
          name={category}
          id={category}
          value={itemSelect} // Make the select controlled
        >
          <option value="">Select an item</option>
          {options}
        </select>

        {/* Display the input for quantity if an item is selected */}
        {itemSelect && (
          <div className={styles.quantityBox}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
        )}

      </div>
      <div className={styles.selectedItem}>
        <p>
          {itemSelect}, Quantity: {quantity}
          {prices(quantity)}
        </p>
      </div>
    </div>
  );
}
export default Select;
