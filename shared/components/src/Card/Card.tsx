import styled from 'styled-components';
import Image from 'next/image';

const S = {
    ProductCardWrapper: styled.div`
        position: relative;
        width: 100%;
        padding: 50%;
        overflow: hidden;
        pointer-events: none;
        
        @media all and (min-width: 770px) {
            pointer-events: auto;
            border-radius: 2rem;
        }
    `
}


export default S.ProductCardWrapper;