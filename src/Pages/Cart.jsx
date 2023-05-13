import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Bottom from "../Components/Bottom";
import { removeFromCart } from "../redux/Cart";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {emptyCart} from "../redux/Cart"

const Wrapper = styled(Box)`
  display: flex;
  width: 100vw;
  margin-top: 80px;
`;
const LeftBox = styled(Box)`
  width: 60vw;
`;
const RightBox = styled(Box)`
  width: 35vw;
`;
const Image = styled("img")({
  width: "120px",
  height: "150px",
  marginLeft: "10px",
});

const RemoveButton = styled(Button)`
  border: 1px solid green;
  border-radius: 2px;
  color: green;
  font-size: 12px;
`;
const CustomTable = styled(Table)`
  width: 90%;
  border: 1px solid lightgray;
  margin: 20px 0px 0px 20px;
`;
const ShippingAddressBox = styled(Box)`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 20px 0px 10px 20px;
  border: 1px solid lightgray;
  padding-bottom: 20px;
`;
const RightBoxHeadings = styled(Typography)`
  margin: 15px 0px 10px 15px;
  margin: "10px 0px 10px 0px";
  font-weight: 700;
  font-size: 18;
`;
const CustomTextField = styled(TextField)`
  margin-left: 15px;
  margin-top: 3px;
`;
const PaymentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  margin: 20px 0px 10px 20px;
  width: 90%;
`;
const PlaceOrderButton = styled(Button)`
  width: 70%;
  margin: 35px auto 20px auto;
  border-radius: 2px;
  display: flex;
  color: white;
  :hover {
    background: black;
    color: white;
  }
`;

const initialAddress = {
  name: "",
  streetaddress: "",
  pincode: "",
  city: "",
  state: "",
  phone: "",
};
const Cart = () => {
  const [address, setAddress] = useState(initialAddress);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cart;
  });
  const navigate = useNavigate();
  
  

  let price = 0;
  cartItems.forEach((element) => {
    price = price + element.price * element.quantity;
  });

  const handleChange = (e) => {
    e.preventDefault();
    setAddress((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  
  const handlePlaceOrder = async()=>{
    try{
      if(address.city!=="" && address.name !=="" && address.phone !== "" && address.pincode !== "" && address.state!=""){
        await axios.post("https://aandjbackend.onrender.com/address/",address)
        console.log(address)
        alert("order placed sucessfully")
        navigate("/");
        dispatch(emptyCart())
      
        
      }else{
        alert("please fill all the fields")

      }
        

    }catch(err){
        console.log(err)
    }

  }
 
  
  return (
    <>
      <Wrapper>
        <LeftBox>
          <Table>
            <TableBody>
              {cartItems?.map((item, _id) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Image src={item.img[0]} alt="product image" />
                    </TableCell>
                    <TableCell align="mid">
                      <Typography>{item?.title}</Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          opacity: "0.9",
                          marginTop: "5px",
                        }}
                      >
                        Size: {item.selectedSize}
                      </Typography>

                      <Typography
                        style={{
                          fontSize: "14px",
                          opacity: "0.9",
                          marginTop: "5px",
                        }}
                      >
                        Quantity: {item.quantity}
                      </Typography>

                      <Box
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          style={{ fontSize: "14px", opacity: "0.9" }}
                        >
                          ₹{item?.price}
                        </Typography>
                        <Typography style={{ fontSize: 14 }}>
                          <strike>₹{item?.mrp}</strike>
                        </Typography>
                        <Typography style={{ color: "green", fontSize: 14 }}>
                          {item?.discount}% OFF
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <RemoveButton
                        onClick={() => dispatch(removeFromCart(item._id))}
                      >
                        Remove
                      </RemoveButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </LeftBox>
        <RightBox>
          <CustomTable>
            <RightBoxHeadings>Payment Summary</RightBoxHeadings>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{ color: "gray", fontSize: "16px", fontWeight: 500 }}
                >
                  Price:
                </TableCell>
                <TableCell align="right">₹ {price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: "gray", fontSize: "16px", fontWeight: 500 }}
                >
                  Delivery Charges:
                </TableCell>
                <TableCell align="right">-₹40</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: "gray", fontSize: "16px", fontWeight: 500 }}
                >
                  Sub Total:
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "black", fontSize: "16px", fontWeight: 700 }}
                >
                  ₹ {price}
                </TableCell>
              </TableRow>
            </TableBody>
          </CustomTable>
          <ShippingAddressBox>
            <RightBoxHeadings>Shipping Address</RightBoxHeadings>
            <CustomTextField
              placeholder="Name"
              variant="standard"
              required
              onChange={handleChange}
              name="name"
              value={address.name}
            />
            <CustomTextField
              placeholder="Street Address"
              variant="standard"
              required
              onChange={handleChange}
              name="streetaddress"
              value={address.streetaddress}
            />
            <CustomTextField
              placeholder="PinCode"
              variant="standard"
              required
              onChange={handleChange}
              name="pincode"
              value={address.pincode}
            />
            <CustomTextField
              placeholder="City"
              variant="standard"
              required
              onChange={handleChange}
              name="city"
              value={address.city}
            />
            <CustomTextField
              placeholder="State"
              variant="standard"
              required
              onChange={handleChange}
              name="state"
              value={address.state}
            />
            <CustomTextField
              placeholder="Phone Number"
              variant="standard"
              required
              onChange={handleChange}
              name="phone"
              value={address.phone}
            />
          </ShippingAddressBox>

          <PaymentBox>
            <RightBoxHeadings>Payment Methods</RightBoxHeadings>

            <FormControl style={{marginLeft:"15px"}} >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue="cash"
                
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Cash on delivery"
                  selected
                  
                />
                {/* <FormControlLabel
                  value="paytm"
                  control={<Radio />}
                  label="Paytm"
                  

                /> */}
              </RadioGroup>
            </FormControl>
          </PaymentBox>
          <PlaceOrderButton variant="contained" onClick={handlePlaceOrder} >Place Order</PlaceOrderButton>
        </RightBox>
      </Wrapper>
      <Bottom />
    </>
  );
};

export default Cart;
