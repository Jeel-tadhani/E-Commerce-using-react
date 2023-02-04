import { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = ({API}) => {
  
  return (
    <Container>
      {API.map((item,i) => (
        <Product item={item}  key={i} />
      ))}
    </Container>
  );
};

export default Products;