import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Wrapper = styled(Box)`
    flex: 1;
    height: 80vh;
    margin: 4px;
    position: relative;
`
const Image = styled("img")({
    width:"100%",
    height:"100%"

})
const ButtonBox = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    height: 100%;
    width: 100%;
    
`
const CustomButton = styled(Button)`
    border: 1px solid white;
    border-radius: 2px;
    color: white;
    width: 150px;
   
    
`
const CategorieItem = ({item}) => {
  return (
    
    <Wrapper>
        <Image src={item.img} alt="" />
        <ButtonBox>
            <Typography style={{fontWeight:800,letterSpacing:"1.3px",fontSize:"18px"}}>{item.title}</Typography>
            <Link to={`http://localhost:3000/products/${item.cat}`} style={{width:"100%",textDecoration:"none"}}>
            <CustomButton>Shop Now</CustomButton>
            </Link>
        </ButtonBox>
      
    </Wrapper>
   
    
   
  )
}

export default CategorieItem
