import React, { useState } from 'react'
import { Box, Button, styled, TextField, Typography } from '@mui/material'
import axios from 'axios'

const Wrapper = styled(Box)`
    /* height: 40vh; */
    width: 98vw;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
`
const ItemBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    text-align: center;
    margin-bottom: 40px;
`
const InputBox = styled(Box)`
    display: flex;
    gap: 1rem;
   
    
`
const CustomButton = styled(Button)`
    border: 1px solid white;
    border-radius: 2px;
    color: white;
    width: 130px;
    /* background: inherit; */   
`
const CustomTextField = styled(TextField)`
    width: 250px;
`
const initialData = {
    name:"",
    email:""
}
const Newsletter = () => {
    const [userData,setUserData] = useState(initialData);

    const handleOnChange = (e) =>{
        setUserData((prev)=>{
            return{
                ...prev,[e.target.name]: e.target.value
            }
            
        })
    }
    const handleJoin = async()=>{
        try{
            await axios.post("http://localhost:8000/join",userData);
            alert("join sucessfully");
            setUserData(initialData)

        }catch(err){
            console.log(err)
        }

    }
    

  return (
    <Wrapper>
        <ItemBox>
            <Typography style={{fontWeight:700,opacity:0.6,letterSpacing:"1px"}} variant='h4'>IT IS ALL ABOUT THE PERKS</Typography>
            <Typography style={{color:"gray"}}>Extra Rs.500 OFF on purchase value of Rs.2500 for all new A&J email subscribers</Typography>
            <InputBox>
            <CustomTextField placeholder='Name' variant="standard" required onChange={handleOnChange} name="name" value={initialData.name}/>
            <CustomTextField placeholder='Email' variant="standard" required onChange={handleOnChange} name="email" value={initialData.email}/>
            <CustomButton variant='contained' onClick={handleJoin}>Join</CustomButton>
            </InputBox>
        </ItemBox>
        
      
    </Wrapper>
  )
}

export default Newsletter
