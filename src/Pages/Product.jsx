import { Box, Button, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Slide from '../Components/Slide';
import Bottom from '../Components/Bottom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addToCart}  from '../redux/Cart';
import Navbar from '../Components/Navbar';


const Wrapper = styled(Box)(({theme})=>({
    display: "flex",
    width:"98vw",
    marginTop:"80px",
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        flexDirection:"column"
      },
  }))
const LeftBox = styled(Box)(({theme})=>({
    display: "flex",
    width:"55vw",
    flexWrap:"wrap",
    gap:"7px",
    padding:"25px 0px 25px 35px",
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        flexDirection:"row",
        width:"98vw",
       
      },
  }))


const RightBox = styled(Box)(({theme})=>({
    width: "40vw",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "25px",
   
    [theme.breakpoints.down('sm')]: {
        width:"98vw",
       
      },
  }))
const Image = styled("img")(({theme})=>({
    height: "35",
    width:"25vw",
   
    [theme.breakpoints.down('sm')]: {
        height: "75",
        width:"65vw",
      },
  }))

const Size = styled(Button)`
    border: 1px solid #461f04;
    justify-content: center;
    color: #461f04;
    font-size: 11px;
    border-radius: 2px;
    cursor: pointer;
    :focus {
        color: white;
        background: #6c3005;
        border-radius: 2px;
   
  }

    
    
`
const CustomButton = styled(Button)`
    width: 50%;
    border-radius: 2px;
    background: #6c3005;
    margin-top: 25px;

`
const QunatityIconBox = styled(Box)`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 5px 3px 5px;
    cursor: pointer;
    border-radius: 2px;
   

`



const Product = () => {
    const [productById,setProductById] = useState();
    const [quantity,setQuantity] = useState(1);
    const [selectedSize,setSelectedSize] = useState();
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split('/')[3]
   
   
    
    
   
    useEffect(()=>{
        const getProduct = async() =>{
            const product = await axios.get(`https://aandjbackend.onrender.com/product/jeans/${location.pathname.split('/')[3]}`)
            setProductById(product.data)
        }
        getProduct();
       
    },[id]);

    const handleAddToCart = (e) =>{
        e.preventDefault();
        dispatch(addToCart({...productById,selectedSize,quantity}))
    // (selectedSize != null)?dispatch(addToCart({...productById,selectedSize,quantity})):alert("please select size first")
        
        
    }
    
    const Increment = () =>{
        setQuantity((prev)=>prev+1);

    }
    const Decrement = () =>{
        setQuantity((prev)=> prev>2?prev-1:1);
        
    }

   
    
    
  return (
    <>
    <Navbar/>
    <Wrapper>
        <LeftBox>
            <Image src={productById?.img[0]} alt="product image" />
            <Image src={productById?.img[1]} alt="product image" />
            <Image src={productById?.img[2]} alt="product image" />
            <Image src={productById?.img[3]} alt="product image" />
            
      
      </LeftBox>
      <RightBox>
        <Typography variant='h5' style={{fontWeight:700,letterSpacing:"1px",color:"black",opacity:"0.7"}}>{productById?.title}</Typography>
        <Typography style={{display:"flex",gap:"2rem",alignItems:"center"}}><span style={{fontWeight:700,fontSize:"20px"}}>₹{productById?.price}</span> <strike style={{color:"gray"}}>₹{productById?.mrp}</strike > <span style={{color:"green"}}>{productById?.discount}% OFF</span>   </Typography>
        <Divider/>
        <Box style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <Typography>Color:  Dusky Blue</Typography>
            
        </Box>
        <Divider/>
        <Box style={{display:"flex",gap:"10px"}}>
        
            {
                productById?.size.map((size)=>{
                    return(
                        <Size onClick={()=>{setSelectedSize(size)}}>{size}</Size>
                    )
                })
            }
           
          
           
           
        </Box>
        <Box style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
        <Typography>Quantity:</Typography>
            <QunatityIconBox>
            <RemoveIcon onClick={Decrement}/>
            </QunatityIconBox>
       
            <Typography>{quantity}</Typography>
             
             <QunatityIconBox>
            <AddIcon onClick={Increment} />
            </QunatityIconBox>
       

        </Box>
        <Divider/>
        <Box>
            <Typography style={{alignItems:"center",display:"flex",gap:"10px"}}><LocalShippingIcon/> Cash On Delivery Available</Typography>
            <Typography style={{alignItems:"center",display:"flex",gap:"10px",marginTop:"10px"}}><LocalShippingIcon/> Free Shipping</Typography>
            
        </Box>
       
        <CustomButton variant='contained' onClick={handleAddToCart}>Add to cart</CustomButton>
      
      
    </RightBox>

      
    </Wrapper>
    
    {/* <Typography style={{margin:"20px 0px 60px 10px",color:"gray"}}>Recommended for you</Typography> */}
 
  
    
    <Bottom/>
    
    </>
  )
}

export default Product
