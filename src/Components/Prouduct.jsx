import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Container = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection:"column",
    width:"20vw",
    height:"70vh",
    marginTop:"35px",
    
    
    [theme.breakpoints.down('sm')]: {
        width:"70vw",
        height:"80vh",
        marginTop:"0px"
      },
  }))
  const ImageBox = styled(Box)(({theme})=>({
    width:"20vw",
    height:"60vh",
    [theme.breakpoints.down('sm')]: {
        width:"70vw",
        height:"60vh",
        
        marginTop:"0px"
      },
  }))

const Image = styled("img")({
    width:"100%",
    height:"100%",
    objectFit:"contain"

})
const TextBox = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:"0.5rem",
    marginTop:"20px",
    [theme.breakpoints.down('md')]: {
        
        width:"80%",
        marginLeft:"60px",
        fontSize:"10px"
      },
  }))
const PriceBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    color:"gray";
    
`

const Prouduct = ({allProducts}) => {
    
  return (
    <>
    {
        allProducts?.map((singleProduct)=>{
            return(
                <Link to={`https://aandj-bm4g.onrender.com/products/jeans/${singleProduct._id}`} style={{textDecoration:"none",color:"inherit"}}>
                <Container>
        <ImageBox>
        <Image src={singleProduct.img[0]} alt="" />
        </ImageBox>
        <TextBox>
            <Typography style={{fontSize:"14px",opacity:"0.7"}}>{singleProduct.title}</Typography>
            <PriceBox>
            <Typography style={{fontSize:"14px",opacity:"0.9"}}>₹{singleProduct.price}</Typography>
            <Typography style={{fontSize:14}}><strike>₹{singleProduct.mrp}</strike></Typography>
            <Typography style={{color:"green",fontSize:14}}>{singleProduct.discount}% OFF</Typography>
            </PriceBox>
           
        </TextBox>
      
    </Container>
    </Link>


            )
        })
    }
    </>
    
  )
}

export default Prouduct
