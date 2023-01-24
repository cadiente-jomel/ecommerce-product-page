import styled from 'styled-components';
import { S as Styled } from './Button';

const S = {
    CheckoutButton: styled(Styled.Button)` 
        border-radius: 1.5rem;
        margin-top: 2rem;
        color: var(--white);
        width: 100%;
    `
}
export default S.CheckoutButton;