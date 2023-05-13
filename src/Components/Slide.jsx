import { Box, styled, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const MyCarousel = styled(Carousel)`
    height: 60vh;
    margin: 0px 10px 0px 10px;
    background: white;
    margin-top: 20px;
  `
  const Image = styled("img")({
    width:"auto",
    textAlign:"center",
    marginLeft:"60px",
    height:"60%",
    
  })
  const InnerBox = styled(Box)`
    display: flex;
    height: 60vh;
    flex-direction: column;
    margin-left: 10px;
    justify-content: center;
    
  `
  const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
   

  `
 
const Slide = (props) => {
  

  return (
    <Box >
      <Typography style={{marginLeft:10,marginTop:10,fontWeight:700,opacity:0.6,fontSize:18}}>Shop for: {props.heading}</Typography>
        <MyCarousel 
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        autoPlay={true}
        
        >
          
          {
            props.slideProducts?.map((item)=>{
              return(
                <>
                <Link to={`http://localhost:3000/products/jeans/${item._id}`} style={{textDecoration:"none",color:"inherit"}}>
                <InnerBox>
                <Image src={item.img[0]} alt="watch image" />
                <TextBox>
                <Typography style={{fontSize:12,opacity:0.7,textAlign:"center",margin:"5px 0px 3px 0px"}}>{item?.title}</Typography>
                <Typography>Rs {item?.price}</Typography>
                
                </TextBox>
            </InnerBox>
            </Link>
            </>

              )
            })
          }
          
             
        </MyCarousel>
      
    </Box>
  )
}

export default Slide
