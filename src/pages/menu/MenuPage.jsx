import styles from "./MenuPage.module.css";
import List from "../../components/list/List.jsx";

function MenuPage() {
  const foods = [
    { id: 1, name: "Pizza", amount: 0, price: "5$" },
    { id: 2, name: "Pasta", amount: 0, price: "3$" },
    { id: 3, name: "Fried chicken", amount: 0, price: "4$" }
  ];
  return (
    <>
      <List items={foods} category="Food" />
      {/* <List /> */}
    </>
  );
}

export default MenuPage;
