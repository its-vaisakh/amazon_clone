import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import {db} from './firebase'; 

function Home(){
    const [products,setProducts] = useState([])

    const getProducts = () =>{
        db.collection("products")
        .onSnapshot((snapshot) => {
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc)=>(
                
                {
                    id : doc.id,
                    Product : doc.data()
                }
            
         ));    
                setProducts(tempProducts);
     })
    }
    useEffect(()=>{
        getProducts()

    },[])
    return(
        <Container>
            <Banner>
            </Banner>    
            <Content>
                {
                    products.map((data)=>(
                        <Product
                            title = {data.Product.name}
                            price = {data.Product.price}
                            rating = {data.Product.rating}
                            image = {data.Product.image}
                            id = {data.id}
                        />

                    ))
                }
            </Content>    

        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width:1500px;
    margin:0 auto;
`
const Banner = styled.div`

    background-image: url(' https://i.imgur.com/SYHeuYM.jpg');
    min-height:800px;
    background-position:center;
    background-size:cover;          
`
const Content =  styled.div`
    padding:10px 10px;
    margin-top: -500px;
    display:flex;

`