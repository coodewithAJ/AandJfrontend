
import { Box, styled } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Bottom from '../Components/Bottom'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Slide from '../Components/Slide'

const CustomBox = styled(Box)`
  background-color: whitesmoke;
  
`
const Home = () => {
  const [slideProducts,setSlideProducts] = useState([]);
  const[secondSlide,setSecondSlide] = useState([]);
  const[wallets,setWallets] = useState([]);
  const[sunGlasses,setSunGlasses] = useState([]);
  useEffect(()=>{
    const getProducts = async() =>{
      const products = await axios.get("https://aandjbackend.onrender.com/product/watches");
      console.log(products)
      setSlideProducts(products.data);
      const secondSlideProducts = await axios.get("https://aandjbackend.onrender.com/product/belts");
      setSecondSlide(secondSlideProducts.data);
      const wallets = await axios.get("https://aandjbackend.onrender.com/product/wallets");
      setWallets(wallets.data);
      const sunglasses = await axios.get("https://aandjbackend.onrender.com/product/sunglasses");
      setSunGlasses(sunglasses.data);
     

    };
    getProducts();

  },[]);
  

  return (
    <CustomBox>
    <Navbar/>
    <Banner/>
  
    <Categories/>
   
    <Slide slideProducts = {slideProducts} heading="Watches"/>
    <Slide slideProducts = {secondSlide} heading="Belts"/>
    <Slide slideProducts = {wallets} heading="Wallets"/>
    <Slide slideProducts = {sunGlasses} heading="Sunglasses"/>
    <Newsletter/>
    <Bottom/>
  
  
    </CustomBox>
  )
}

export default Home
