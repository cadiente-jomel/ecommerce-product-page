import styled from 'styled-components';

const S = {
    Navigation: styled.nav` 
        align-items: center;
        background-color: var(--white);
        display: flex;
        height: 10rem;
        padding: 0 1rem;
        width: 100%;
        z-index: 100;
        
        @media all and (min-width: 770px) {
            border-bottom: 2px solid var(--grayish-blue);
            padding: 0 7rem;
        }
    `
}


export default S.Navigation;