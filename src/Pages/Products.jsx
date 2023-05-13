import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Bottom from '../Components/Bottom'
import Navbar from '../Components/Navbar'
import Prouduct from '../Components/Prouduct'
import axios from "axios"
import { useLocation } from 'react-router-dom'


const Wrapper = styled(Box)`
  margin-top: 96px;
  
    
`
const CustomSelect = styled("select")({
  width:"70px",
  padding:"5px",
  borderRadius:"2px",
  textDecoration:"none",
  outline:"none",
  cursor:"pointer",
  border:"1px solid lightgray"
})
const SelectOption = styled("option")({
  borderRadius:"2px",
  cursor:"pointer",
  color:"gray",
  width:"40px"
})
const FilterBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 95vw;
  margin-left: 30px;
  
`
const Container = styled(Box)(({theme})=>({
  display: "flex",
  flexWrap:"wrap",
  padding:"40px 50px 50px 40px",
  justifyContent:"space-between",
  
  [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection:"column"
    },
}))
const Products = () => {
  const[allProducts,setAllProducts] = useState();
  const [sortValue,setSortValue] = useState("low to high");
  const location = useLocation();
  
  useEffect(()=>{
    const getProduct = async() =>{
      const products = await axios.get(`http://localhost:8000/product/${location.pathname.split("/")[2]}`)
      setAllProducts(products.data);
    }
    getProduct();
   
  },[])

  const handleSort = async()=>{
    const value = document.getElementById("sort").value;
    setSortValue(value);
  }
  useEffect(()=>{
    const getProduct = async() =>{
      const products = await axios.get(`http://localhost:8000/product/${location.pathname.split("/")[2]}`)
      if(sortValue == "low to high"){
        setAllProducts(products.data.sort((a,b)=>a.price-b.price))
      }else{
        setAllProducts(products.data.sort((a,b)=>b.price-a.price))

      }
      
    }
    getProduct();
   
  },sortValue)

  
 
  return (
    <Wrapper>
        <Navbar/>
        

        <FilterBox>
          {/* <Box style={{display:"flex",gap:"1rem"}}>
          <Box>
          <CustomSelect name="" id="">
          <SelectOption disabled selected>Size</SelectOption>
          
         
            <SelectOption value="">S</SelectOption>
            <SelectOption value="">L</SelectOption>
            <SelectOption value="">M</SelectOption>
            <SelectOption value="">XLL</SelectOption>
          </CustomSelect>
          </Box>
          <Box>
          <CustomSelect name="" id="">
          <SelectOption disabled selected>Color</SelectOption>
         
            <SelectOption value="">S</SelectOption>
            <SelectOption value="">L</SelectOption>
            <SelectOption value="">M</SelectOption>
            <SelectOption value="">XLL</SelectOption>
          </CustomSelect>
          
          </Box>
          <Typography style={{fontSize:"20px",fontWeight:"600",marginLeft:"10px",color:"green",letterSpacing:"1px"}}>{location.pathname.split("/")[2].toLocaleUpperCase()} FOR MEN</Typography>
          </Box> */}
          <Typography style={{fontSize:"20px",fontWeight:"600",marginLeft:"10px",color:"green",letterSpacing:"1px"}}>{location.pathname.split("/")[2].toLocaleUpperCase()} FOR MEN</Typography>
          <Box>
          <CustomSelect onChange={handleSort} id='sort'>
          <SelectOption disabled selected >Sort</SelectOption>
         
            <SelectOption value="low to high">low to high</SelectOption>
            <SelectOption value="high to low">high to low</SelectOption>
          
          </CustomSelect>
          </Box>
       
         
        </FilterBox>
        
        <Container>
        <Prouduct allProducts = {allProducts}/>
        </Container>
        <Bottom/>
      
    </Wrapper>
  )
}

export default Products
