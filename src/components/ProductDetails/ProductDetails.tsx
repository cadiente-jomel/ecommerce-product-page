import styled from 'styled-components';

const S = {
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

    OldProductPrice: styled.p`
        color: var(--blue);
        text-decoration: line-through;    
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 5px;
    `
}


export default () => (
    <div>
        <S.CompanyName>sneakers company</S.CompanyName>
        <S.ProductName>Fall Limited Edition Sneakers</S.ProductName>
        <S.ProductDetails>These low profile sneakers are your perfect wear companion. Featuring a durable rubber outer sole, They'll withstand everything the weather can offer.</S.ProductDetails>
        <S.ProductPrice>$125.00
            <S.DiscountPercentage>50%</S.DiscountPercentage>
        </S.ProductPrice>
        <S.OldProductPrice>$250.00</S.OldProductPrice>
    </div>
)