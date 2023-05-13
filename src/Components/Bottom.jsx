import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';



const Wrapper = styled(Box)(({theme})=>({
  display: "flex",
  width:"97vw",
  marginLeft:"1vw",
  justifyContent:"space-between",
  background:"rgb(30 41 59)",
  padding:"60px 100px 40px 100px",
  color:"white",
  marginTop:"30px",
  
  
  [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection:"row",
      marginLeft:"0px",
      padding:"30px 15px",
      fontSize:"10px"
    },
}))
const FirstBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    
    
`


const Bottom = () => {
  return (
    <Wrapper>
        <FirstBox>
           <Typography>About Us</Typography>
           <Typography>Our Story</Typography>
           <Typography>Contact Us</Typography>
           <Typography>Store Locator</Typography>
           <Typography>Become a Franchise</Typography>
      
      </FirstBox>
      <FirstBox>
      <Typography>Policy</Typography>
           <Typography>Privacy</Typography>
           <Typography>Return</Typography>
           <Typography>Delivery</Typography>
           <Typography>Terms & Conditions</Typography>
      
    </FirstBox>
    <FirstBox>
    <Typography>My Account</Typography>
           <Typography>Sign In</Typography>
           <Typography>Register</Typography>
           <Typography>Wishlist</Typography>
           <Typography>Return</Typography>
      
    </FirstBox>
    <FirstBox style={{alignItems:"center"}}>
    <Typography>Follow Us</Typography>
           <InstagramIcon/>
           <FacebookIcon/>
           <YouTubeIcon/>
           <TwitterIcon/>
      
    </FirstBox>
      
    </Wrapper>
  )
}

export default Bottom
