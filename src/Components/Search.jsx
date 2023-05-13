import { Box, InputBase, styled } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)(({theme})=>({
    background: "whitesmoke",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    padding: "2px 10px 2px 10px",
    borderRadius: "2px",
    width: "400px",
    [theme.breakpoints.down('md')]: {
      width:"30vw",
      
    },

}))
const SearchInput = styled(InputBase)(({theme})=>({
  width: "91%",
  [theme.breakpoints.down('md')]: {
    width:"30vw",
    fontSize:"10px"
    
  },

}))
 

const SearchInputIcon = styled(SearchIcon)`
   width: 9%;
`

const Search = () => {
  return (
    <SearchBox>
    <SearchInput placeholder='Search for products & more'/>
    <SearchInputIcon/>
      
    </SearchBox>
  )
}

export default Search
