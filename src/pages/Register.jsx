import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { store } from "../Context/Context";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button.attrs({ 
  type: 'submit'
})`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const {navigate}=useContext(store);
  const [userName,setusername]=useState("") 
  const [password,setpossword]=useState("") 
  const [Cpassword,setCpossword]=useState("") 

  function handlesubmit(e){
    e.preventDefault();

    if(password!=Cpassword){
      alert("Please enter same password");
    }else{
    sessionStorage.setItem("userName",userName)
    sessionStorage.setItem("password",password)
    navigate('/login')
   }
  }
  


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={(e)=>handlesubmit(e)}>
          <Input placeholder="name" required/>
          <Input placeholder="last name" required/>
          <Input placeholder="username" onChange={(e)=>setusername(e.target.value)} required/>
          <Input placeholder="email" type='email' required/>
          <Input placeholder="password" onChange={(e)=>setpossword(e.target.value)} required/>
          <Input placeholder="confirm password" onChange={(e)=>setCpossword(e.target.value)} required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;