import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import Login from './Login'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const getCartItems =()=>{
    db.collection('cartitems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=>({
        id: doc.id,
        Product: doc.data()

      }))
      setCartItems(tempItems);
    })
  }
  useEffect(()=>{
      getCartItems();
  },[])
  console.log("User", user)
  return (
    <Router>  
          <Login setUser={setUser}/>
      
      <Container>
      <Header user={user} cartItems ={cartItems}/>
      <Routes>
        <Route path ="/Cart" element={<Cart cartItems={cartItems}/>}/>
        <Route path ="/" element={<Home/>}/>
      </Routes>  
    </Container>
        
    
    </Router>
  );
}

export default App;

const Container = styled.div`
`