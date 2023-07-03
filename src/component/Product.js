import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import { addToCard } from '../redux/features/product/cardSlice';
import {fetchProduct} from '../redux/actions/productAciton';
export const Product = () => {

    
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.product.data)
    useEffect(() => {
        
        dispatch(fetchProduct())
    }, [])


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