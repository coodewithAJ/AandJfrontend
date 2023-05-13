import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import {categories} from "../data";
import CategorieItem from './CategorieItem';


const Wrapper = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    marginTop: "50px",
    [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection:"column"
      
    },

}))

const Categories = () => {
  return (
    <Wrapper>
        {
            categories?.map((item)=>{
                return(
                    
                 
                    <CategorieItem item = {item} key={item.id}/>
                  
                    
                    
                )
            })
        }
      
    </Wrapper>
  )
}

export default Categories
