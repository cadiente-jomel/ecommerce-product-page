import React, { useState } from "react"
import styled from "styled-components"

import Carousel from "../Carousel/Carousel"
import ProductDetails from "../ProductDetails/ProductDetails"

interface ProductComponentProps {
  setCartProductQuantity: Function
}

interface StyledProps {
  isProductDetails?: boolean
}

export const S = {
  Row: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    max-width: var(--grid-width);

    @media all and (min-width: 770px) {
      gap: 10rem;
      flex-direction: row;
    }
  `,
  Column: styled.div`
    display: ${({ isProductDetails }: StyledProps) =>
      isProductDetails ? "block" : "flex"};
    justify-content: ${({ isProductDetails }: StyledProps) =>
      isProductDetails ? "initial" : "center"};
    margin-top: ${({ isProductDetails }: StyledProps) =>
      isProductDetails ? "5rem" : 0};
    width: 100%;

    @media all and (min-width: 770px) {
      width: 40%;
    }
  `,
  CartText: styled.span`
    margin-left: 1rem;
  `,
}

export default (props: ProductComponentProps) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [quantityCounter, setQuantityCounter] = useState(0)

  return (
    <S.Row>
      <S.Column isProductDetails={false}>
        <Carousel
          showCarousel={showCarousel}
          setShowCarousel={setShowCarousel}
        />
      </S.Column>
      <S.Column isProductDetails={true}>
        <ProductDetails
          quantityCounter={quantityCounter}
          setQuantityCounter={setQuantityCounter}
          setCartProductQuantity={props.setCartProductQuantity}
        />
      </S.Column>
    </S.Row>
  )
}
