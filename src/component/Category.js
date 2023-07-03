import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoy } from '../redux/actions/categoryAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Category = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.data);
    useEffect(() => {

        dispatch(fetchCategoy())

    }, [])
    const listGroup = categories.map(category => (
        <ListGroup.Item key={category} to={`/category/${category}`} as={Link} >{category.toUpperCase()} </ListGroup.Item>
    ))
    return (
        <div>
            <ListGroup >
                {listGroup}
            </ListGroup>
        </div>
    )
}