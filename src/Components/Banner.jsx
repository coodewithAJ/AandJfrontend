import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import shoe from "../images/shoe.png"
import { Link } from 'react-router-dom'


const Wrapper = styled(Box)(({theme})=>({
    width: "95vw",
    height: "100vh",
    marginTop: "70px",
    display: "flex",
    padding: "20px",
    [theme.breakpoints.down('sm')]: {
      display:"none",
      
    },

}))
const LeftBox = styled(Box)`
    width: 50vw;
    height: 100%;
    text-align: center;
    border-radius: 50%;
    padding: 20px;

    
`
const RightBox = styled(Box)`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 20px;
`
const Image = styled("img")({
    width:"60%",
    height:"100%",
    
 
    

})
const Heading = styled(Typography)`
    font-size: 40px;
    font-weight: 700;
    color: #754a4a;
    width: 100%;
    letter-spacing: 2px;
    
    
`
const CustomButton = styled(Button)`
    border: 1px solid green;
    border-radius: 2px;
    color: green;
    width: 150px;
   
    
`

const Banner = () => {
  return (
    <Wrapper>
      <LeftBox>
        <Image src={shoe} alt="shoe image" />
      
      </LeftBox>
      <RightBox>
        <Heading>The Largest Range Of Mens Collection</Heading>
        <Link to="products/jeans">
        <CustomButton>Shop Now</CustomButton>
        </Link>
      
      </RightBox>
      
    </Wrapper>
  )
}

export default Banner
