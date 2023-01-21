import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import FullCarousel from '../Carousel/FullCarousel';
import ProductDetails from '../ProductDetails/ProductDetails';
import Quantiy from '../Quantity/Quantity';

interface ProductComponentProps {
    setCartProductQuantity: Function
}

interface StyledProps {
    isProductDetails?: boolean,
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
        display: ${({ isProductDetails }: StyledProps) => isProductDetails ? "block": "flex"};
        justify-content: ${({ isProductDetails }: StyledProps) => isProductDetails ? "initial": "center"};
        margin-top: ${({ isProductDetails }: StyledProps) => isProductDetails ? "5rem" : 0};
        width: 100%;
        
        @media all and (min-width: 770px) {
            width: 40%;
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
    CartText: styled.span`
       margin-left: 1rem;
    `
}

export default (props: ProductComponentProps) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [quantityCounter, setQuantityCounter] = useState(0)

    const AddCartComponent = () => {
        if(Number(quantityCounter) == 0) {
            alert("Nothing to add")
            return
        }
        props.setCartProductQuantity((prev: number) => prev + Number(quantityCounter));
    }
    return (
    <S.Row>
        <FullCarousel carousel={showCarousel} setShowCarousel={setShowCarousel}/>
        <S.Column isProductDetails={false}>
            <Carousel setShowCarousel={setShowCarousel}/>
        </S.Column>
        <S.Column isProductDetails={true}>
            <ProductDetails/>  
            <S.QuantityContainer>
                <Quantiy counter={quantityCounter} setCounter={setQuantityCounter}/>
                <Button onClick={AddCartComponent}>
                    <Image priority src="/assets/images/icon-cart.svg" alt="icon-cart" width={20} height={20}/>
                    <S.CartText>Add to cart</S.CartText>
                </Button> 
            </S.QuantityContainer>
        </S.Column>
    </S.Row>
    )
}