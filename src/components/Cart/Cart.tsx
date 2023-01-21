import styled from 'styled-components';
import Image from 'next/image';
import CheckoutButton  from '../Button/CheckoutButton';
import { S as Styled} from '../Product/Product';

interface CartComponentProps {
    cartProductQuantity: number,
    setCartProductQuantity: Function,
    isActive?: boolean,
}

interface CartComponentStyledProps {
    isMarginLeft?: boolean,
    isActive?: boolean
}

const S = {
    Cart: styled.div`
        background-color: var(--white);
        border-radius: 1.2rem;
        box-shadow: 0 0 1rem var(--black);
        display: ${({ isActive }: CartComponentStyledProps) => isActive ? "inline-block" : "none"};
        position: absolute;
        padding: 2rem; 
        right: -1rem;
        top: 8rem;
        transition: top .5s ease;
        width: 95vw;
        z-index: 100;
        
        @media all and (min-width: 770px) {
            width: 35rem;
            right: 10rem;
        }
    `,
    CartTitle: styled.h3`
        font-size: 3rem;
        border-bottom: 2px solid var(--grayish-blue);
        padding: 1rem 2rem; 

        @media all and (min-width: 770px) {
            font-size: 2rem;
        }
    `,
    Container: styled.div`
        width: 100%;
        font-size: 1.6rem;
    `,
    ItemContainer: styled.div`
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    `,
    ItemImageWrapper: styled.div`
        position: relative;
        width: 12rem;
        height: 12rem;
        border-radius: 5px;
        overflow: hidden;
        
        @media all and (min-width: 770px) {
            width: 5rem;
            height: 5rem;
        }
    `,     
    ItemDetails: styled.div`
        line-height: 2.5rem;
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        font-weight: 700;
    `,

    CartFlex: styled(Styled.QuantityContainer)`
        margin-top: 0;
        flex-direction: row;
    `,
    ItemName: styled.p`
        color: var(--blue); 
    `,
    ItemPriceContainer: styled.div`
        display: flex;
    `,

    Paragraph: styled.p`
        margin-left: ${({ isMarginLeft }: CartComponentStyledProps) => isMarginLeft ? "1rem" : "0"};
    `,

    Span: styled.span`
        color: var(--blue);
        letter-spacing: .2rem;
    `,
    RemoveBtnContainer: styled.div`
        margin: auto 0;
    `,

    EmptyMessage: styled.h3`  
        text-align: center;
        padding: 4rem 0;
        font-size: 3rem;
        color: var(--blue);
    `
}



const ProductItem = (props: CartComponentProps) => {
    if(props.cartProductQuantity <= 0) {
        return <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
    } else {
        return (

            <S.Container>
                <S.ItemContainer>
                    <S.CartFlex>
                        <S.ItemImageWrapper>
                            <Image priority src="/assets/images/image-product-1-thumbnail.jpg" alt="product image" fill/>
                        </S.ItemImageWrapper>
                        <S.ItemDetails>
                            <S.ItemName>Fall Limited Edition...</S.ItemName>
                            <S.ItemPriceContainer>
                                <S.Paragraph>
                                    <S.Span>$125</S.Span>
                                    <S.Span>x</S.Span>
                                    <S.Span>{props.cartProductQuantity}</S.Span>
                                </S.Paragraph>
                                <S.Paragraph isMarginLeft={true}>${props.cartProductQuantity * 125}</S.Paragraph>
                            </S.ItemPriceContainer>
                        </S.ItemDetails>
                    </S.CartFlex>
                    <S.RemoveBtnContainer>
                        <Image priority src="/assets/images/icon-delete.svg" onClick={() =>props.setCartProductQuantity(0)} width={20} height={20} alt="icon delete"/> 
                    </S.RemoveBtnContainer>
                </S.ItemContainer>

                <CheckoutButton>Checkout</CheckoutButton>
            </S.Container>
        )
    }

}


export default (props: CartComponentProps) => {
    return <S.Cart isActive={props.isActive}>
        <S.CartTitle>Cart</S.CartTitle>    
        <ProductItem cartProductQuantity={props.cartProductQuantity} setCartProductQuantity={props.setCartProductQuantity} />
    </S.Cart> 
}