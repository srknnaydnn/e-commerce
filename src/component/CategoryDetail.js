import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { fetchCategoryDetail } from "../redux/actions/categoryDetailAction";
import { addToCard } from '../redux/features/product/cardSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
export const CategoryDetails=()=>{

    const dispatch=useDispatch();
    const products=useSelector((state)=>state.categoryDetail.data)
    const params=useParams();
    const categoryName=params.categoryName
    useEffect(() => {
      
        dispatch(fetchCategoryDetail(categoryName.toLowerCase()))
        console.log(categoryName);
    }, [categoryName])

    const addProduct=(product)=>{

        dispatch(addToCard(product))
    }
    const card = products.map(product => (

        <div className='col-md-4' key={product.id}>

            <Card  style={{ width: '18rem',height:'20rem',marginBottom:'10px' }}>
                <div className='text-center' >
                <Card.Img variant="top" src={product.image}  style={{width:'130px',height:'100px',paddingTop:'20px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button onClick={()=>addProduct(product)}>Add To Basket</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (

        <div className='row'>
            {card}
        </div>

    )
}