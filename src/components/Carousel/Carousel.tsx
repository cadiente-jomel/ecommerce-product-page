import {useState} from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Card from '../Card/Card';
import ProductThumbnail from './ProductThumbnail';
import { S as Styled } from './FullCarousel';

interface CarouselStyledProps {
    isLeft?: boolean,
    isRight?: boolean
}

interface CarouselComponentProps {
    setShowCarousel: Function
}

export const S = {
    CarouselContainer: styled.div`
        margin: 0 auto;
        position: relative;
        width: 100%;
    `,
    MobileCarouselControlBtn: styled(Styled.CarouselControlBtn)`
        position: absolute;
        top: 50%;
        border: 1px solid var(--grayish-blue);
        transform: translateY(-150%);
        display: flex;
        left: ${({isLeft}: CarouselStyledProps) => isLeft ? "0": "initial"};
        right: ${({isRight}: CarouselStyledProps) => isRight ? "0": "initial"};
        z-index: 100;
        
        @media all and (min-width: 770px) {
            display: none;
        }
    `,

}



export default (props: CarouselComponentProps) => {
    const [imgIndex, setImgIndex] = useState(1)

    const handleChange = (setShowCarousel: Function) => {
        setShowCarousel(true)
    }

    return(
        <S.CarouselContainer>
            <S.MobileCarouselControlBtn isLeft={true} isRight={false} onClick={() => setImgIndex((prev: number) =>  prev <= 1 ? 4 : prev - 1)}>
                <Image priority src="/assets/images/icon-previous.svg" alt="icon-previous" width={20} height={20} />
            </S.MobileCarouselControlBtn>
            <Card>
                <Image priority onClick={() => handleChange(props.setShowCarousel)} src={`/assets/images/image-product-${imgIndex}.jpg`} alt="Product Image" fill/>
            </Card>
            <ProductThumbnail setImgIndex={setImgIndex}/>
            <S.MobileCarouselControlBtn isLeft={false} isRight={true} onClick={() => setImgIndex((prev: number) =>  prev >= 4 ? 1 : prev + 1)}>
                <Image priority src="/assets/images/icon-next.svg" alt="icon-next" width={20} height={20}/>
            </S.MobileCarouselControlBtn>
        </S.CarouselContainer>
    )
}