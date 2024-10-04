import PropTypes from "prop-types";

function List(props){

    const Listitems = props.items;
    const category = props.category;

    const foodsList = Listitems.map((item) => (<li key={item.id}>{item.name}: {item.price}</li>));

    return(
        <>
        <div>
            <h3>{category}</h3>
            <ul>{foodsList}</ul>
        </div>
        </>
    );
}

List.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.string
  };

export default List;