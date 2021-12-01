import React from 'react';
import styled from 'styled-components';
import {db} from './firebase';

function CartItem({id,item}){

    const deleteItem =(e)=>{
        e.preventDefault()
        db.collection('cartitems').doc(id).delete();
}


    let options = [];
    for(let i=0;i<Math.max(item.quantity+1,20);i++){

        options.push(<option value={i}>Qty: {i}</option>)
    }

    const updateCart =(newvalue)=>{
        db.collection('cartitems').doc(id).update({

            quantity : parseInt(newvalue)
        })

    }
    return(
        <Container>
            <ImageContainer>
                <img src={item.image}/>
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                   <CartItemInfoBottomQty>
                       <select value={item.quantity} onChange={(e)=>updateCart(e.target.value)}>
                        {options}
                       </select>                       
                       </CartItemInfoBottomQty> 
                   <CartItemInfoBottomAction onClick ={deleteItem}>Delete</CartItemInfoBottomAction>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                {item.price}
            </CartItemPrice>
        </Container>    

    )


}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;

`
const ImageContainer = styled.div`
    width:  180px;
    height: 180px;
    margin-right:16px;
    flex-grow:1;

    img{
        object-fit:contain;
        height:100%;
        width:100%;
    }
`
const CartItemInfo = styled.div`
`
const CartItemPrice = styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px;
`

const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size:18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
`
const CartItemInfoBottomQty = styled.div``
const CartItemInfoBottomAction = styled.div`
    margin-left:16px;
    cursor:pointer;
    color: #007185;

`