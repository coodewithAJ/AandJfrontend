import { AppBar,Badge,Box,Button,styled, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/UserSlice';


const MainBox = styled(AppBar)(({theme})=>({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  background: "white",
  color: "#616161",
  boxShadow: "none",
  height: "54px",
  position: "static",
  
  [theme.breakpoints.down('md')]: {
      display:"flex",
      justifyContent:"space-around"
    },
}))
const RightBox = styled(Box)`
    display: flex;
    gap: 1rem;
    align-items: center;
   
    
`
const LoginButton = styled(Button)`
    text-transform: none;
    color: gray;
    border-radius: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid whitesmoke;
    width: 90px;
    
`
 
const Navbar = () => {
  const [cartCount,setCartCount] = useState()
  const navigate = useNavigate()
  const data = useSelector((state)=>{
    return state.user
  })
  const cart = useSelector((state)=>{
    return state.cart
  })
  useEffect(()=>{
    setCartCount(cart.length)
  },[cart])
  

  const dispatch = useDispatch()
  
  const handleClick = () =>{
    navigate("/login")
  }
  const Logout = () =>{
    dispatch(removeUser())
  }
    
  return (
    <>
   
    <AppBar>
    <MainBox>
        <Typography>A&J</Typography>
        <Search/>
        <RightBox>
       {data[0]?.name?
       <>
       <Typography style={{color:"#4f0707aa",fontWeight:600}}>{data[0]?.name}</Typography>
       <LoginButton onClick={Logout}> <Person2Icon/> Logout</LoginButton>
       </>
       :
       <LoginButton onClick={handleClick}> <Person2Icon/> Login</LoginButton>
       }
       
       <Link to={"/cart"} style={{textDecoration:"none",color:"inherit"}}>
       <Badge badgeContent={cartCount} color="primary">
       <ShoppingCartIcon/>
       </Badge>
       </Link>
    </RightBox>
    
    </MainBox>
    </AppBar>
   
      
    </>
  )
}

export default Navbar
