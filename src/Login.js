import React from 'react'
import styled from 'styled-components'
import {auth,provider} from './firebase'

function Login ({setUser}){
    
    const signIn = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
        let user = result.user;
        let newUser ={
                    
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
        }
            setUser(newUser);

        }).catch((error)=>{
            alert(error.message)
        })
    }
        return(
            <Container>
                <Content>
                    <AmazonLogo src="https://th.bing.com/th/id/R.76b875511c948ff031b60b6476a0f715?rik=9pebrSfb%2frVmxA&riu=http%3a%2f%2ffbs.admin.utah.edu%2fdownload%2fushop%2famazon.png&ehk=IDlg83q6IKvFalu1SX%2b5KCvXiM19mb44Se0AB3ln350%3d&risl=&pid=ImgRaw&r=0"/>
                    <h1> Sign In</h1>
                    <LoginButton onClick = {signIn}>
                       Sign in with Google     
                    </LoginButton>
                </Content>
            </Container>

        )

}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;

`
const Content = styled.div`
    padding: 100px;
    background-color:white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align:center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`