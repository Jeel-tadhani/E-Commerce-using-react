import { Add, Remove } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { store } from '../Context/Context';
import { mobile } from '../responsive';

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 4px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Dis =styled.div`
  display:flex;
`

const CartProduct = ({item}) => {
    const {handlecartdelete} =useContext(store)
    const [amount,setamount]=useState(1)
    return (
        <Product>
            <ProductDetail>
              <Image src={item.searchImage} />
              <Details>
                <ProductName>
                  <b>Product:</b> {item.productName}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {item.productId}
                </ProductId>
                <Dis>
                <ProductColor color="black" />
                <ProductColor color="Darkblue" />
                <ProductColor color="Gray" />
                </Dis>
                <ProductSize>
                  <b>Size:</b> {item.sizes}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add onClick={()=>setamount(amount+1)}/>
                <ProductAmount >{amount}</ProductAmount>
                <Remove onClick={()=>{
                    if(amount<=1){
                     handlecartdelete(item.productId)
                    }else{
                        setamount(amount-1)
                    }
                }}/>
              </ProductAmountContainer>
              <ProductPrice>₹ {item.price}</ProductPrice>
            </PriceDetail>
          </Product>
        //    <Hr />
    );
};

export default CartProduct;