import React from 'react-router-dom';
import styled from 'styled-components';
import style from 'styled-components';
import {db} from './firebase';

function Product({title,price,image,id,rating}){
    const addToCart =()=>{
        const cartItem = db.collection("cartitems").doc(id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity+1
                })

            }else{
                db.collection("cartitems").doc(id).set({

                    name: title,
                    image:image,
                    price:price,
                    quantity :1
                })
            }

        })


    }
    return(
            <Container>
                <Title>
                    {title}
                </Title>
                <Price>
                    {price}
                </Price>
                <Rating>
                      {
                     Array(rating)
                     .fill()
                     .map(rating=><p>⭐</p>)
                      }
                </Rating>
                <Image>
                <img src={image}/>
                </Image>
                <ActionButton>
                <AddToCartButton
                onClick ={addToCart}>
                    Add to cart
                </AddToCartButton>
                </ActionButton>
            </Container>

    )
}


export default Product

const Container = styled.div`
    background-color:white;
    width:300px;
    max-height:300px;
    flex:1;
    padding:20px;
    margin:10px;
    display:flex;
    flex-direction:column;
`
const Title = styled.div`

`
const Price = styled.div`
    font-weight:500;
    margin-top:3px;
`
const Image = styled.div`
    img{
        max-height:200px;
        
    }
    display:flex;
        align-items:center;
        justify-content:center;

`
const Rating = styled.div`
display:flex;
        align-items:center;
        justify-content:center;
`

const AddToCartButton = styled.div`
    width:100px;  
    background-color:#f0c14b;
    border: 2px solid #a88734;
    aligh-items:center;
    justify-content:center;
    display:flex;
    border-radius:2px;
    cursor:pointer;
`
const ActionButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`