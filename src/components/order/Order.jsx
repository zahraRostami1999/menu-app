import styles from "./Order.module.css";
import Select from "../select/Select.jsx";

function Order() {
  const foods = [
    { id: 1, name: "Pizza", quantity: 0, price: 9 },
    { id: 2, name: "Pasta", quantity: 0, price: 13 },
    { id: 3, name: "Fried chicken", quantity: 0, price: 10 },
  ];
  const drinks = [
    { id: 1, name: "Beer", quantity: 0, price: 3 },
    { id: 2, name: "Pepsi", quantity: 0, price: 1 },
    { id: 3, name: "Coca-Cola", quantity: 0, price: 1 },
  ];
  const appetizers = [
    { id: 1, name: "French Fries", quantity: 0, price: 5 },
    { id: 2, name: "onion rings", quantity: 0, price: 6 },
    { id: 3, name: "Mozzarella Sticks", quantity: 0, price: 8 },
  ];
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.orderBox}>
          <div className={styles.boxTitle}>
            <h3>Place your order</h3>
          </div>
          <div className={styles.selectBox}>
            <Select items={foods} category="Food" />
            <Select items={drinks} category="Drink" />
            <Select items={appetizers} category="Appetizers" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
