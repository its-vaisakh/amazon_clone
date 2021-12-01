import React from 'react'
import styled from 'styled-components'


function CartTotal({cartItems}){
    const addTotal =()=>{
            let amount = 0;
            cartItems.map((item)=>{

                amount += (item.Product.quantity*item.Product.price)
            })
            return amount
    }
    const ObjectLength=( )=> {
        let length = 0;;
        for( let abc in cartItems ) {
            if( cartItems.hasOwnProperty(abc) ) {
                length++;
            }
        }
        return length;
    };
    return(
            <Container>
                <SubTotal>
                   <h3>(Subtotal {ObjectLength()} Items): ₹{addTotal()}</h3>
                </SubTotal>
                <CheckButton>
                    Proceed to checkout
                </CheckButton>
            </Container>

    )

}

export default CartTotal

const Container = styled.div`
    background-color:white;
    flex:0.3;
    padding : 20px;
` 
const SubTotal = styled.div`
    margin-bottom:16px;
`
const CheckButton = styled.button`
    background-color: #f0c14b;
    width:100%;
    padding: 4px 8px;
    border:2px solid #a88734;
    border-radius: 4px;
    cursor:pointer;
    font-size:16px;
    :hover{
        background-color: #ddb347;
    }
`