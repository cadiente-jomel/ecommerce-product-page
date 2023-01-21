import styled from 'styled-components';

interface CartCounterComponentProps {
    q: number
}

interface CartCounterComponentStyledProps {
    n: number
}

const S = {
    Counter: styled.div`
        display: ${(props: CartCounterComponentStyledProps) => props.n ? "flex" : "none"};
        width: 2rem;
        height: 2rem;
        color: var(--white);
        border-radius: 50%;
        background-color: var(--color-primary-darker);
        position: absolute;
        right: 8rem;
        top: .6rem;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    `
}

export default (props: CartCounterComponentProps) => {
    return  <S.Counter n={props.q}>{props.q}</S.Counter>
}