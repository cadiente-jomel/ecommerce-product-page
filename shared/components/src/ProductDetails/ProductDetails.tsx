import React from "react"
import Image from "next/image"
import styled from "styled-components"

import Quantity from "../Quantity/Quantity"
import Button from "../Button/Button"

interface ProductDetailsComponentProps {
  quantityCounter: number
  setQuantityCounter: Function
  setCartProductQuantity: Function
}

export const S = {
  CompanyName: styled.p`
    text-transform: uppercase;
    color: var(--color-primary-darker);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 1.2rem;
  `,

  ProductName: styled.h1`
    font-size: 3rem;
    margin-bottom: 1.2rem;
  `,

  ProductDetails: styled.p`
    color: var(--blue);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 1.2rem;
  `,

  ProductPrice: styled.h3`
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    align-items: center;
  `,

  DiscountPercentage: styled.span`
    background-color: var(--color-primary-lighter);
    color: var(--color-primary-darker);
    font-weight: 700;
    border-radius: 10px;
    margin-left: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.7rem;
    @media all and (min-width: 770px) {
      font-size: 2rem;
    }
  `,

  QuantityContainer: styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 5rem;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    flex-direction: column;

    @media all and (min-width: 770px) {
      flex-direction: row;
    }
  `,

  OldProductPrice: styled.p`
    color: var(--blue);
    text-decoration: line-through;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5px;
  `,
  CartText: styled.span`
    margin-left: 1rem;
  `,
}

export default (props: ProductDetailsComponentProps) => {
  const AddCartComponent = () => {
    if (Number(props.quantityCounter) == 0) {
      alert("Nothing to add")
      return
    }
    props.setCartProductQuantity(
      (prev: number) => prev + Number(props.quantityCounter)
    )
  }
  return (
    <>
      <div>
        <S.CompanyName>sneakers company</S.CompanyName>
        <S.ProductName>Fall Limited Edition Sneakers</S.ProductName>
        <S.ProductDetails>
          These low profile sneakers are your perfect wear companion. Featuring
          a durable rubber outer sole, They'll withstand everything the weather
          can offer.
        </S.ProductDetails>
        <S.ProductPrice>
          $125.00
          <S.DiscountPercentage>50%</S.DiscountPercentage>
        </S.ProductPrice>
        <S.OldProductPrice>$250.00</S.OldProductPrice>
      </div>

      <S.QuantityContainer>
        <Quantity
          counter={props.quantityCounter}
          setCounter={props.setQuantityCounter}
        />
        <Button onClick={AddCartComponent}>
          <Image
            priority
            src="/assets/images/icon-cart.svg"
            alt="icon-cart"
            width={20}
            height={20}
          />
          <S.CartText>Add to cart</S.CartText>
        </Button>
      </S.QuantityContainer>
    </>
  )
}
