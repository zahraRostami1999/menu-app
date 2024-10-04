import styles from "./MenuPage.module.css";
import List from "../../components/list/List.jsx";

function MenuPage() {
  const foods = [
    { id: 1, name: "Pizza", amount: 0, price: "$9" },
    { id: 2, name: "Pasta", amount: 0, price: "$13" },
    { id: 3, name: "Fried chicken", amount: 0, price: "$10" }
  ];
  const drinks = [
    { id: 1, name: "Beer", amount: 0, price: "$3" },
    { id: 2, name: "Pepsi", amount: 0, price: "$1" },
    { id: 3, name: "Coca-Cola", amount: 0, price: "$1" }
  ];
  const appetizers  = [
    { id: 1, name: "French Fries", amount: 0, price: "$5" },
    { id: 2, name: "onion rings", amount: 0, price: "$6" },
    { id: 3, name: "Mozzarella Sticks", amount: 0, price: "$8" }
  ];

  return (
    <>
      {foods.length >0 && <List items={foods} category="Food" />}
      {drinks.length >0 && <List items={drinks} category="Drinks" />}
      {appetizers.length >0 && <List items={appetizers} category="Appetizers" />}
    </>
  );
}

export default MenuPage;
