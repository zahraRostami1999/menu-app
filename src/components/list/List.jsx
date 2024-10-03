import PropTypes from 'prop-types';

function List(props){

    const items = props.items;
    const category = props.category;
    const foodsList = items.map((item) => <li>{item.name}: {item.price}</li>)

    return(
        <>
        <div>
            <h3>{category}</h3>
            <ul>{foodsList}</ul>
        </div>
        </>
    );
}

items.propTypes = {
    id : PropTypes.number,
    name : PropTypes.string,
    amount : PropTypes.number,
    price : PropTypes.string
}



export default List;