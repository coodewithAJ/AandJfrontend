import { Box, Button, styled, TextField, Typography } from '@mui/material'
import axios from "axios"
import React, {  useState } from 'react'
import loginPageImage from "../images/loginPageImage.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/UserSlice';


const Wrapper = styled(Box)`
    margin-top: 56px;
    width: 100vw;
    height: 90vh;
    display: flex;
`
const LeftBox = styled(Box)`
    width: 40%;
    padding: 10px;
    margin-left: 20px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
`
const RightBox = styled(Box)`
  width: 60%;
  height: 100%;
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 1rem;
  justify-content: center;
  
`
const Image = styled("img")({
    width:"300px",
    height:"500px",
})
const MyTextField = styled(TextField)`
    width: 55%;
`
const ContinueButton = styled(Button)`
    width: 55%;
    margin-top: 15px;
    background:#4e342e;
    border-radius: 2px;
    :hover{
        background: #4e342e;
    }
    

`
const accountInitialValues = {
    signin:{
        text:"New to Here? Create an account ",
        value:"signin"
    },
    signup:{
        text:"Already account? Login",
        value:"signup"
    }
}

const signUpInitialValues = {
    name:"",
    email:"",
    phone:"",
    password:""
}
const signInInitialValues = {
    email:"",
    password:""
}


const Login = () => {
    const[login,setLogin] = useState(accountInitialValues.signup);
    const [signUp,setSignUp] = useState(signUpInitialValues);
    const [signIn,setSignIn] = useState(signInInitialValues);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        e.preventDefault();
        setSignUp((prev)=>{
            return ({
                ...prev,[e.target.name]: e.target.value
            })
        })
        
    }
    const Signup = async() =>{
            try{
                if(signUp.email=="" || signUp.name =="" || signUp.password=="" || signUp.phone==""){
                    alert("please fill all the fields");
                    navigate("/login")
                }
                const response = await axios.post("https://aandjbackend.onrender.com/signup",signUp);
            }catch(err){
                console.log(err)
            }
            setSignUp(signUpInitialValues);
            setLogin(accountInitialValues.signin)
    }
    const handleLoginChange =(e)=>{
        e.preventDefault();
        setSignIn((prev)=>{
            return(
                {...prev,[e.target.name]:e.target.value}
            )
        })
    }
    
    const Login = async() =>{
        try{
            const response = await axios.post("https://aandjbackend.onrender.com/signin",signIn);
            {
                if(response.data == "Incorrect Password"){
                    alert("Incorrect Password")
                }else if(response.data =="please create account first"){
                    alert("please create account first")
                }else{
                    dispatch(addUser(response.data))
                    alert("login sucessfully")
                    navigate("/")
                }
            }

        }catch(err){
            console.log("error while signin from frontend side "+ err)
        }
    }
  return (
    <Wrapper>
        <LeftBox>
            <Image src={loginPageImage} alt="image" />
        </LeftBox>
        <RightBox>
            {login.value === "signup"?
            <>

        <MyTextField placeholder='Name' variant="standard" onChange={handleChange} required name="name" value={signUp.name} />
        <MyTextField placeholder='Email' variant="standard"  onChange={handleChange} required name="email" value={signUp.email}/>
        <MyTextField placeholder='Phone' variant="standard"  onChange={handleChange} required name="phone" value={signUp.phone}/>
        <MyTextField placeholder='Password' variant="standard" onChange={handleChange} required name="password" value={signUp.password}/>
        <ContinueButton variant='contained' onClick={Signup} >Continue</ContinueButton>
        <Typography style={{color:"#ff5252",cursor:"pointer"}} onClick={()=>{setLogin(accountInitialValues.signin)}}>{login.text}</Typography>
    
        </>:
        <>
        <MyTextField placeholder='Email' variant="standard" name="email" onChange={handleLoginChange} value={signIn.email} />
        <MyTextField placeholder='Password' variant="standard" name="password" onChange={handleLoginChange} value={signIn.password} />
        <ContinueButton variant='contained' onClick={Login}>Login</ContinueButton>
        <Typography style={{color:"#ff5252",cursor:"pointer"}} onClick={()=>{setLogin(accountInitialValues.signup)}}>{login.text}</Typography>
        </>}
      
        </RightBox>
        
    
    </Wrapper>
  )
}

export default Login
