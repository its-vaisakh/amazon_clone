import React from "react";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Header({cartItems,user}){

    const getCount=()=>{

        let count = 0;
        cartItems.forEach((item) => {
            count += item.Product.quantity;
            
        });
            return count;

    }
    return(
        <Container>
            <Link to='/Home'>
            <HeaderLogo>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY_ABgnclSsHClv2v1T-CJ3taKt16phhwe-FzXWg6qM4A5oEK-xHmNr7RH8KRPeZk7A&usqp=CAU"}/>  
            </HeaderLogo>
            </Link>
            <HeaderOptionAddress>
                <RoomIcon/>
                <HeaderOptions>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOptions>
            </HeaderOptionAddress> 
            <HeaderSearch>
                  <HeaderSearchInput type='text'/>
                  <HeaderSearchIconContainer>
                  <SearchIcon/>
            </HeaderSearchIconContainer>
            </HeaderSearch> 
            <HeaderNavItems>
                <HeaderOptions>
                    <HeaderOptionOne>Hello, {user.name}</HeaderOptionOne>
                    <HeaderOptionTwo>Account & Lists</HeaderOptionTwo>
                </HeaderOptions>
                <HeaderOptions>
                    <HeaderOptionOne>Returns</HeaderOptionOne>
                    <HeaderOptionTwo> & Orders</HeaderOptionTwo>
                </HeaderOptions>
                <HeaderOptionCart>
                <Link to ="/Cart">

                    <ShoppingBasketIcon/>
                    </Link>

                </HeaderOptionCart>                
                <CartCount>{getCount()}</CartCount>
            </HeaderNavItems>
        </Container>
    )
}

export default Header
const Container = styled.div`
    height: 60px;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
`
const HeaderLogo = styled.div`
img {
     width:100px;
     margin-left:13px;
     align-item:center;
     padding-top:15px;
    }

`
const HeaderOptionAddress = styled.div`
    padding-left:9px;
    padding-right:9px;
    padding-top:10px;
    padding-bottom:10px;
    display:flex;
    align-items:center;
`
const OptionLineOne = styled.div`
    font-weight:5;
    font-size:13px;
    Font name: "Amazon Ember", Arial, sans-serif;
`
const OptionLineTwo = styled.div`
    font-weight:700;
    line-height:15px;
    font-size:14px;
    Font name: "Amazon Ember", Arial, sans-serif;
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    align-items:center;
    justify-content:center;
    margin-right:50px;
    over-flow:hidden;
    background-color:white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`
const HeaderSearchInput = styled.input`
    height:34.5px;
    width:600px;
    border-radius:5px;
    flex-grow:1;
    
    :focus{
        outline:none;
    }
    border:0;
`
const HeaderSearchIconContainer = styled.div`
    background-color:#FEBD69;
    width:50px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
    border-radius:5px;
`
const HeaderNavItems = styled.div`
    display:flex;
    justify-content:space-between;
    margin-right:50px;
`
const HeaderOptions = styled.div`
    padding:9px 9px 10px 10px;
`
const HeaderOptionOne = styled.div`
    font-weight:5;
    font-size:13px;
    Font name: "Amazon Ember", Arial, sans-serif;
`
const HeaderOptionTwo = styled.div`
    font-weight:700;
    line-height:15px;
    font-size:14px;  
    Font name: "Amazon Ember", Arial, sans-serif;
`
const HeaderOptionCart = styled.div`
    display:flex;
    a{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:50px;
    color:white;
    }
`
const CartCount =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    paddig-left:10px;
    color: #f08804;
    font-weight: 700;
`