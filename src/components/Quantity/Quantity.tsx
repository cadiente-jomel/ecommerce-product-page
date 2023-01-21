import styled from 'styled-components';
import Image from 'next/image';

interface QuantityComponentProps {
    counter: number,
    setCounter: Function
}

const S = {
   CounterContainer: styled.div` 
     font-size: 1.6rem;
     background-color: var(--grayish-blue);
     border-radius: 5px;
     display: flex;
     padding: 2rem;
     width: 100%;
     justify-content: space-between;
     
     @media all and (min-width: 770px) {
         width: 40%;
     }
   `,
   CounterBtn: styled.span``,
   QuantityCounter: styled.span``,
}

const Quantiy = (props: QuantityComponentProps) => {
    return (

        <S.CounterContainer>
            <S.CounterBtn>
                <Image priority src="/assets/images/icon-minus.svg" alt="icon-minus" onClick={() => {
                    if (props.counter > 0) {
                        props.setCounter((prevCounter: number) => prevCounter - 1);
                    }
                }} width={10} height={5}/>
            </S.CounterBtn>
            <S.QuantityCounter>{props.counter}</S.QuantityCounter>
            <S.CounterBtn>
                <Image priority src="/assets/images/icon-plus.svg" alt="icon-plus" onClick={() => {
                    props.setCounter((prevCounter: number) => prevCounter + 1);
                }} width={10} height={10}/>
            </S.CounterBtn>
        </S.CounterContainer>
    )
}

export default Quantiy;