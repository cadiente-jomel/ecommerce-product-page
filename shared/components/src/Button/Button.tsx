import styled from 'styled-components';

export const S = {
    Button: styled.button`
        background-color: var(--color-primary-darker);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: var(--white);
        font-family: inherit;
        font-size: var(--default-font-size);
        font-weight: 700;
        padding: 2rem;
        width: 100%; 

        &:hover {
            background-color: var(--color-primary-hovered);
        }

        @media all and (min-width: 770px) {
            width: 60%;
        }
    `
}


export default S.Button;